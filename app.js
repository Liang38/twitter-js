const express = require( 'express' );
const nunjucks = require('nunjucks');
const routes = require('./routes');
const path = require('path');
const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache : true})// point nunjucks to the proper directory for templates

app.use(express.static('public'));

app.use('/', routes);

app.use ('/', function(req, res, next){
   console.log(req.method, req.originalUrl, res.statusCode) ;
   next();
})

app.use('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});




app.listen(3000, () => {console.log('its working')});