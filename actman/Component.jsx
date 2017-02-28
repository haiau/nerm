var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  _handleClick() {
    alert('You clicked Me!');
  },
  render() {
    return(
      <html>
        <head>
            <title>Universal App</title>
            <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <div>
            <h1>{this.props.title}</h1>
            <p>Server-side rendering!</p>
            <button onClick={this._handleClick}>Click Me</button>
            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(this.props)
              }}>
            </script>
          </div>
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
});
