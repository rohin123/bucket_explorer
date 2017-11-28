var express =  require('express')
var path = require('path')

const app = express();
var port = (process.env.PORT || 8080);

app.set('view engine', 'html');
app.use(express.static(path.resolve(__dirname, './dist')));

var server = app.listen(port, ()=>{
	var host = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%s:%s', host,port);
});

