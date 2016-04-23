// Load data
var path = require('path');

// Begin routing
module.exports = function(app){

  // API GET Requests
  // ----------------

  app.get('/admin', function(req, res){
    res.sendFile(path.join(__dirname + 
      '/../public/admin.html'));
  });

  app.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname + 
      '/../public/tables.html'));
  });

  app.get('/reservation', function(req, res){
    res.sendFile(path.join(__dirname + 
      '/../public/reservation.html'));
  });

  // If no match found default to home
  app.use(function(req, res){
    res.sendFile(path.join(__dirname + 
      '/../public/home.html'));
  });

}