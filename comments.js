// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'data/comments.json');
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Add a new comment
app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),