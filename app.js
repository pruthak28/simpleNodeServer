const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

const PORT_NUM = process.env.PORT || 4000;

io.on('connection', (socket) => {

  console.log('a user connected');
  socket.on("sendMessageToServer", (value)=>{
    io.emit("messageFromServer", value);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});



app.get("/", (req, res) => {
  res.send("Server is up an running");
});
app.use(cors);

http.listen(PORT_NUM, () => {
  console.log('listening on *:' + PORT_NUM);
});
