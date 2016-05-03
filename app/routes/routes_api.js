var tableData = require('../data/table-data.js');
var waitlistData = require('../data/waitlist-data.js');
var path = require('path');

module.exports = function(app){

    // GET Requests
    // Shows users json data on the page

    app.get('/api/tables', function(req,res){
        res.json(tableData);
    });

    app.get('/api/waitlist', function(req,res){
        res.json(waitlistData);
    });

    // POST Requests
    // Handles data when users submit form

    app.post('/api/tables', function(req,res){
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitlistData.push(req.body);
            res.json(false);
        }
    });
}