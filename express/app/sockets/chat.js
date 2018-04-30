module.exports = io => {
  const { sockets } = io;
  sockets.on('connection', client => {
    client.on('send-server', data => {
      let msg = '<b>'+data.name+':</b>' + data.msg + '<br>';
      client.emit('send-client', msg);
      client.broadcast.emit('send-client', msg);
    })
  })
};
