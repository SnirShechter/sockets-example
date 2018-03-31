var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('./client'))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', function (socket) {
	console.log('a user connected');
	socket.on('msg',function(data){
		console.log(data)
		io.emit('msg',data);
	})
});
http.listen(3000, function () {
	console.log('listening on *:3000');
});