var express = require('express');
//var msg = require('./mod_teste');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));//config body-parser(o body ajuda na hora da inserção no bd, ou seja o express vai pegar tudo o que estiver dentro do body)
app.use(expressValidator());//middleware da aplicação

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;