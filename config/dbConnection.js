var mysql = require('mysql');

var connMysql = function(){
	//console.log('Conexão com o bd foi estabelecida');
		return connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			database : 'portal_noticias'

		});
}
	module.exports = function(){
		//console.log('O autoload carregou o módulo de conexão com o bd');
		return connMysql;	
	}