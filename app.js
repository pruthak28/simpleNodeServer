const app = require('express')();
const http = require('http').createServer(app);
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const io = socketio(http);
app.use(cors);
io.on('connection', (socket) => {

  console.log('a user connected');
  socket.on("sendMessageToServer", (value)=>{
    io.emit("messageFromServer", value);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


http.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});
