import socketIo from 'socket.io';

function EmitEventToClient(socket) {
  socket.emit('FromAPI', '123123123123');
}

function initSocketIo(activedServer) {
  return socketIo(activedServer, {
    handlePreflightRequest: (req, res) => {
      const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': req.headers.origin, //or the specific origin you want to give access to,
        'Access-Control-Allow-Credentials': true
      };
      res.writeHead(200, headers);
      res.end();
    }
  });
}

function bindEventOnIo(io) {
  let interval;
  io.on('connection', socket => {
    console.log('New client connected');
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => EmitEventToClient(socket), 1000);
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}

const bindSockIo = activedServer => {
  const io = initSocketIo(activedServer);
  bindEventOnIo(io);
  return activedServer;
};

export default bindSockIo;
