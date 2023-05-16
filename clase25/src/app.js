import express from 'express'
import config from './config.js'
import { fork } from 'child_process'

const app = express()

let visitas = 0
app.get('/', (req, res) => {
  res.send(`El numero de visitas es ${++visitas}`)
})

function sumar() {
  let suma = 0
  for (let i = 0; i < 5e9; i++) {
    suma += i
  }
  return suma
}

app.get('/calculo-bloq', (req, res) => {
  const resultadoSuma = sumar()
  res.send(`El resultado de la suma es ${resultadoSuma}`)
})

app.get('/calculo-nobloq', (req, res) => {
  const childProcess = fork('./src/childProcess.js')
  childProcess.send('calcular')
  childProcess.on('message', (resultadoSuma) => {
    res.send(`El resultado de la suma es ${resultadoSuma}`)
  })
})

const PORT = config.port

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
