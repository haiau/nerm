var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('test', ['contactlist']);
var bodyParser = require('body-parser');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
//get all contacts
app.get('/contactlist', function(req, res){
  console.log("Received a GET request");

  db.contactlist.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

//add new contact
app.post('/contactlist', function(req, res) {
  var data = req.body;
  data["_id"] = "";
  console.log(data);
  db.contactlist.insert(data, function(err, doc) {
    res.json(doc);
  });
});

//delete contact by id
app.delete('/contactlist/:id', function(req, res) {
  var id = req.params.id;
  console.log("Remove: " + id);

  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    console.log("FIND TO REMOVE:" + id + "\nRESPONSE: " + JSON.stringify(doc));
  });

  db.contactlist.remove({_id: mongojs.ObjectId(id)});

});

//get a contact with id
app.get('/contactlist/:id', function(req, res) {
  var id = req.params.id;
  console.log("Get ID: " + id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    console.log("GET ID:" + id + "\nRESPONSE: " + JSON.stringify(doc));
    res.json(JSON.stringify(doc).toString());
  });
});

//update
app.put('/contactlist/:id', function(req, res) {
  var id = req.params.id;
  console.log("Update: " + id);
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true
  }, function(err, doc) {
      res.json(doc);
  });
});

app.listen(3000);
console.log("Server is running on: http://localhost:3000");
