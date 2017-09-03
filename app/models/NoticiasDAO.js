function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc',callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia,callback){
	this._connection.query('select * from noticias where id_noticia = '+id_noticia.id_noticia,callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
	//console.log(noticia);
	this._connection.query('INSERT INTO noticias SET ?', noticia, callback);//o set ? nesse caso seria equivalente ao (x,x)values(x,x) o ? entende onde tem que acrescentar 
}														//as informações que foram passadas via json para o bd,por isso no json os nome devem estar iguais ao do banco

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5',callback);
}

module.exports = function(){				
	return NoticiasDAO;
}///prototype permite acessar as propriedades da nossa função, que seria uma classe em js
// toda variável que começar com _ na frente siginifica que ela é uma variável que faz parte do contexto da classe