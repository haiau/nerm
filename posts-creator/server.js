var functions = require('./libs/functions.js');

var fs					= require('fs');
var express				= require('express');
var jade				= require('jade');
var bodyparser 			= require('body-parser');
var multipart			= require('connect-multiparty');
var multipartMiddleware = multipart();
var mongoose			= require('mongoose');

var app = express();

app.use('/themes', express.static(__dirname + '/public/'));
app.use('/pictures/', express.static(__dirname + '/public/upload/'));
app.use('/views/', express.static(__dirname + '/views/'));

app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.use(bodyparser.urlencoded({
	extended: true
}));

mongoose.connect('mongodb://localhost/test');
var dbMongo = mongoose.connection;

dbMongo.on('error', console.error.bind(console, 'connection error: '));
dbMongo.once('open', function(){
	console.log('MongoDB Connected');
});

var PostSchema = mongoose.Schema ({
	title: String,
	slug: String,
	picture: String,
	teaser: String,
	content: String,
	author: String,
	time: Number
});

var Post = mongoose.model('Post', PostSchema);




app.get('/', function(req, res){
	var posts = Post.find({}, function(err, result){
		result = result.sort({'id': -1});

		res.render('index', {title: 'Home Page', posts: result, functions: functions});
	});
});

app.get('/khai', function(req, res){
	abc(function(data){
		console.log(data);
	});
});

var abc = function(callback) {
	var posts = Post.find({}, function(err, result){
		result = result.sort({'id': -1});
	});
	callback("123456");
}

app.get('/post/:title/:id.html', function(req, res){
	var id = req.params.id || 0;

	Post.findById(id, function(err, post){
		if (post) {
			res.render('post/detail', {title: post.title, post: post});
			return false;
		}

		res.render('404');
	});
});

app.get('/create-post', multipartMiddleware, function(req, res){
	res.render('post/create', {title: 'Create a post'})
});

app.post('/create-post', multipartMiddleware, function(req, res){
	var post = new Post;
	post.title = req.body.title;
	post.slug = functions.removeAccent(req.body.title);
	post.teaser = req.body.teaser;
	post.content = req.body.content;

	var file = req.files.picture;

	var originalFilename = file.name;
	var fileType = file.type.split('/')[1];
	var fileSize = file.size;
	var pathUpload = __dirname + '/public/upload' + originalFilename;

	var data = fs.readFileSync(file.path);
	fs.writeFileSync(pathUpload, data);

	if (fs.existsSync(pathUpload)) {
		post.picture = originalFilename;
	}

	post.save(function(err, obj){
		if (!err) {
			res.render('post/create', { status: 'success', message: 'Post successful'});
			return false;
		}
	});
});

var server = app.listen(80, function() {
	console.log('Listening on port %d', server.address().port);
});