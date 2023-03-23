const socketClient = io()

socketClient.on('bienvenida', (text) => {
  //console.log(text)
  socketClient.emit('respuestaBienvenida', 'Gracias por la bienvenida')
})

const formulario = document.getElementById('formulario')
const inputMessage = document.getElementById('message')
formulario.onsubmit = (e) => {
  e.preventDefault()
  socketClient.emit('message', inputMessage.value)
}

socketClient.on('allMessages',messages=>{
    console.log(messages);
})