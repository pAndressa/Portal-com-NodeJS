
var app = require('./config/server');

//var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home')(app);//consign serve para evitar de ter que fazer vários includes, útil no design partner mvc

//var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
	console.log('Servidor On');
});