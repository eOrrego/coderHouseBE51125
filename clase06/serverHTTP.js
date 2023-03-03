//const http = require('http') // forma 1 de requerir
import http from 'http' // forma 2

// creamos servidor
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.end('Hola con http')
    } else if (req.url === '/productos') {
      res.end('Hola productos')
    } else if (req.url === '/usuarios') {
      res.end('Hola usuarios')
    }
  }

  console.log(req.url)
})

server.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})
