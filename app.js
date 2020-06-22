const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {

  console.log('a user connected');
  socket.on("sendMessageToServer", (value)=>{
    io.emit("messageFromServer", value);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 4000
http.listen(port, () => {
  console.log('listening on *:4000');
});
