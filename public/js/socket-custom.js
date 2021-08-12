var socket = io();

socket.on('connect', function () {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Perdimos conexion con el servidor');
})
// on es para escuchar
// emit es para emmitir
socket.emit('sendMessage', {
  user: 'Josniel',
  message: 'Hello world Viking'
}, function (res) {
  console.log('Server Answer: ' + res.res);
}),

  socket.on('sendMessage', function (message) {
    console.log('message :>> ', message);
  })