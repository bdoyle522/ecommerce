var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var products = require('./products');

var port = 8080;

var app = express();

app.use(bodyParser.json(), express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/ecommerce', function(err){
  // console.log(err);
});

// var db = mongojs('ecommerce',['products']);


// app.post('/products', function(req, res){
//   console.log(req.body);
//   db.products.insert(req.body, function(err, results){
//     if(!err){
//       console.log(results);
//       res.status(201).end();
//     }
//   });
// });
//
app.get('/api/products', function(req, res){
  products.find(req.query)
  .populate('user')
  .exec(function(err, result){
    if(err){
      return res.status(500).send(err);
    }
    res.send(result);
  })
});
  // db.products.find({}, function(err, results){
  //   if(!err){
  //     console.log(results);
  //     res.status(201).json(results);
  //   }
  // });
app.post('/api/products', function(req, res){
  var product = new products(req.body);
  product.save().then(function(err){
    return res.status(201).end();
  })
});

app.put('/api/products/:id', function(req, res){
  products.findByIdAndUpdate(req.params.id, req.body, function(err, result){
    if(err){
      return res.status(500).send(err);
    }
    res.send(result);
  });
});

app.delete('/api/products/:id', function(req, res){
  products.findByIdAndRemove(req.params.id, function(err, result){
    if(err){
      return res.status(500).send(err);
    }
    res.send(result);
  });
})
//
// app.get('/products/:id', function(req, res){
//   db.products.find({_id: mongojs.ObjectId(req.params.id)}, function(err, results){
//     if(!err){
//       console.log(results);
//       res.status(201).end();
//     }
//   });
// });
//
// app.put('/products/:id', function(req, res){
//   db.products.update({_id: mongojs.ObjectId(req.params.id)},{$set: req.body}, function(err, results){
//     if(!err){
//       console.log(results);
//       res.status(201).end();
//     }
//   });
// });
//
// app.delete('/products/:id', function(req, res){
//   db.products.remove({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results){
//     if(!err){
//       console.log(results);
//       res.status(201).end();
//     }
//   });
// });


app.listen(port, function(){
  console.log('Listening on port: ', port);
});
