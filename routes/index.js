const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser')

// const urlencodedParser = bodyParser.urlencoded({extended:false})

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets : tweets } );
});


router.get('/user/:name', function(req, res){
    let name = req.params.name
    let tweets = tweetBank.find({'name': name})
    res.render('index', { tweets:tweets, showForm: true } )
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});
// Express response objects have a .sendFile method that takes a filepath and serves up the contents of the file it finds there.

// router.get('/public', function(req, res){
//     res.sendFile(req.params.name)
// })

module.exports = router;