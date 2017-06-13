const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets : tweets } );
});

router.use(express.static('public'));

router.get('/user/:name', function(req, res){
    let tweets = tweetBank.find(['name', req.params.name])
    res.render('index',{tweets:tweets} )
})
// Express response objects have a .sendFile method that takes a filepath and serves up the contents of the file it finds there.

// router.get('/public', function(req, res){
//     res.sendFile(req.params.name)
// })

module.exports = router;