// Dependencies
var bodyParser = require('body-parser');
var express = require('express');
var routes = require("./app/routes/routes.js");

// Configure express
var app = express();
var PORT = process.env.PORT || 8081;  

// Handle file types
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Set the static files location 
// /public/img will be /img for users
// var staticContentFolder;
// staticContentFolder = __dirname + '/app/public';
// app.use(express.static(staticContentFolder));


// Use routes from external file
// Pass in an instance of the server
require('./app/routes/routes.js')(app);


// Listener
app.listen(PORT,function() {
    // console.log(
    //   'Serving static content from ' + 
    //   staticContentFolder);
    console.log(
      'App listenting on PORT: ' + 
      PORT);
});