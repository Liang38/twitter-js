const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache : true})// point nunjucks to the proper directory for templates

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.render('index.html', locals, function(err, output){console.log(output);} )
app.use ('/', function(req, res, next){
   console.log(req.method, req.originalUrl, res.statusCode) ;
   next();
})

app.get('/', function(req, res, next){
    res.render('index', locals, function(err, html) {
    res.send(html);
    });
   next();
})
// app.post('modernism', function(req, res, next){
//     console.log('modernism')
//     next();
// })
app.listen(3000, () => {console.log('its working')});