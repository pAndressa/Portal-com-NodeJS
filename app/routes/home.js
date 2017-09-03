module.exports = function(application){
	application.get('/',function(req, res){
		//res.send("<html><body><h1>Not&iacute;cias de tecnologia</h1></body></html>");
		application.app.controllers.home.index(application, req,res);
	});
};