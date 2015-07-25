var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
var ttt = require("./index");

var game = new ttt.Game();

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


io.on('connection', function (socket) {
  socket.on('move', function (input) {
    console.log(input);

    // pass to handle move
    game.handleMove(input);

    // check if game over

  });
});
