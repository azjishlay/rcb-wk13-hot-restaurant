var path = require('path');

module.exports = function(app){

    app.get('/tables', function(req,res){
        res.sendFile(path.join(__dirname +
            '/../public/tables.html'));
    });

    app.get('/reservations', function(req,res){
        res.sendFile(path.join(__dirname +
            '/../public/reservations.html'));
    });

    // Default to home page
    app.use(function(req,res){
        res.sendFile(path.join(__dirname +
            '/../public/home.html'));
    });

};