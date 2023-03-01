// console.log('Primer log');
// setTimeout(() => {
//     console.log('Set TimeOut')
// }, 0);
// console.log('Ultimo log');

// setInterval(() => {
//     console.log('Set Interval')
// }, 2000);

const fs = require('fs')

// // sincronicos

// // escribir un archivo
// fs.writeFileSync('archivo.txt', 'primera linea')
// //fs.appendFileSync('archivo.txt','segunda linea')

// // leer un archivo
// const infoArchivo = fs.readFileSync('archivo.txt', 'utf-8')
// //console.log(infoArchivo);

// // eliminar un archivo
// //fs.unlinkSync('archivo.txt')

// //existe un archivo
// console.log(fs.existsSync('archivo.txt'))

// asincronos

//CB

// fs.writeFile('archivo2.txt', 'primera linea asincrona', (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('Archivo creado con exito')
//   }
// })

// fs.readFile('archivo2.txt','utf-8',(error,info)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log(info);
//     }
// })

// fs.unlink('archivo2.txt',(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo eliminado con exito');
//     }
// })

// Promesas

// fs.promises.writeFile('archivoPR.txt','Primera linea promesas')
// .then(()=>{
//     console.log('Archivo creado con exito');
// })
// .catch(error=>{
//     console.log(error);
// })

// fs.promises
//   .readFile('archivoP.txt', 'utf-8')
//   .then((info) => {
//     console.log(info)
//   })
//   .catch((error) => console.log(error))

// fs.promises
//   .unlink('archivoPR.txt')
//   .then(() => console.log('Archivo eliminado con exito'))
//   .catch((error) => console.log(error))

const productos = [
  {
    nombre: 'iPhone',
    precio: 500,
    stock: 40,
  },
  {
    nombre: 'iPad',
    precio: 200,
    stock: 20,
  },
  {
    nombre: 'TV',
    precio: 800,
    stock: 10,
  },
  {
    nombre: 'Computador',
    precio: 1200,
    stock: 50,
  },
]

// JSON.stringify(productos)
// JSON.parse()


// fs.promises.writeFile('archivoPR.json',JSON.stringify(productos))
// .then(()=>{
//     console.log('Productos guardados con exito');
// })
// .catch(error=>{
//     console.log(error);
// })

fs.promises
  .readFile('archivoPR.json', 'utf-8')
  .then((info) => {
    console.log(info)
    console.log(JSON.parse(info));
  })
  .catch((error) => console.log(error))