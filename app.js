var express = require('express');
var app = express();
var Firebase = require('firebase')

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'))

app.get('/', function(req, res){
	res.render('index')
});

app.use('/auth',require('./controllers/auth.js'));

app.listen(3000, function(){
	console.log('Server started on port 3000!')
});