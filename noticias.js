var http = require('http');

var server =  http.createServer( function(req, res){

	var categoria = req.url;
	if(categoria == "/tecnologia"){
		res.end("<html><body><h1>Not&iacute;cias de tecnologia</h1></body></html>");
	}else if(categoria == "/moda"){
		res.end("<html><body><h1>Not&iacute;cias de moda</h1></body></html>");
	}else if(categoria == "/beleza"){
		res.end("<html><body><h1>Not&iacute;cias de beleza</h1></body></html>");
	}else{

		res.end("<html><body><h1>Portal de not&iacute;cias</h1></body></html>");
	}
});

server.listen(3000);