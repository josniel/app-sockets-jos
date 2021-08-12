const { io } = require('../server');
io.on('connection', (client) => {
  console.log('Usuario conectado');

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // on es para escuchar
  // emit es para emmitir

  client.on('sendMessage', (data, callback) => {
    console.log('message :>> ', data);

    client.broadcast.emit('sendMessage', data)

    /* if (message.user) {
      callback({
        res: 'Excelent'
      });
    } else {
      callback({
        res: 'Bad'
      })
    } */
  })

  client.emit('sendMessage', {
    user: 'Admin',
    message: 'Welcome to this app'
  });


});