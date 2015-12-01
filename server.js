var express = require('express');
var cors = require('cors');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var port = 8080;

var app = express();

app.use(bodyParser.json(), express.static(__dirname + '/public'));

var db = mongojs('ecommerce',['products']);


app.post('/products', function(req, res){
  console.log(req.body);
  db.products.insert(req.body, function(err, results){
    if(!err){
      console.log(results);
      res.status(201).end();
    }
  });
});

app.get('/products', function(req, res){
  db.products.find({}, function(err, results){
    if(!err){
      console.log(results);
      res.status(201).json(results);
    }
  });
});

app.get('/products/:id', function(req, res){
  db.products.find({_id: mongojs.ObjectId(req.params.id)}, function(err, results){
    if(!err){
      console.log(results);
      res.status(201).end();
    }
  });
});

app.put('/products/:id', function(req, res){
  db.products.update({_id: mongojs.ObjectId(req.params.id)},{$set: req.body}, function(err, results){
    if(!err){
      console.log(results);
      res.status(201).end();
    }
  });
});

app.delete('/products/:id', function(req, res){
  db.products.remove({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results){
    if(!err){
      console.log(results);
      res.status(201).end();
    }
  });
});


app.listen(port, function(){
  console.log('Listening on port: ', port);
});
