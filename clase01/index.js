let stringVal = 'coderhouse'
let numbervAL = 5
let bool = true
let nullVal = null
let indefinido = undefined

let array = [1, 2, 3, 4, true, 'coder', [1, 2, 3, 4], {}]
const fun1 = () => {}
class Clase {}

//console.log(typeof array)
//console.log(Array.isArray(array));

// actividad en clase

let nombre = 'Juan'
let edad = 35
let precio = 500
let nombreSeries = ['GOT', 'Friends']
let nombrePeliculas = ['Pelicula1', 'Pelicula2']

let usuario1 = {
  nombre: 'Juan',
  edad: 35,
  precio: 500,
  nombreSeries: ['GOT', 'Friends'],
  nombrePeliculas: ['Pelicula1', 'Pelicula2'],
}

let usuarios = [
  {
    nombre: 'Juan',
    edad: 35,
    precio: 500,
    nombreSeries: ['GOT', 'Friends'],
    nombrePeliculas: ['Pelicula1', 'Pelicula2'],
  },
  {
    nombre: 'Carolina',
    edad: 38,
    precio: 1000,
    nombreSeries: ['Friends'],
    nombrePeliculas: ['Pelicula2', 'Pelicula3'],
  },
]

usuarios.forEach((usuario) => {
  ;(usuario.edad = usuario.edad + 1),
    //usuario.edad++,
    usuario.nombreSeries.push('Peaky')
})

//console.log(usuarios)

// let o const
//let primeraVariablePrueba =
var primeraVariable = 5
let segundoVariable = 10
{
  //console.log(primeraVariable);
  //console.log(segundoVariable);
  var terceraVariable = 50
  let cuartaVariable = 100
  //console.log('bloque',cuartaVariable);
}
//console.log(terceraVariable);
//console.log('global',cuartaVariable);

let contador = 1
const port = 8080

const array2 = []
const obj = {}
const string = 'coderhouse'
//string = 'BackEnd'
contador = 2
array2.push(5)
//console.log(contador)

// FUNCIONES

function sumar(n1, n2) {
  return n1 + n2
  //console.log(n1+n2)
}
sumar(5, 7)
//console.log(sumar(5, 7))

// funcion flecha

const sumarFlecha = (n1, n2) => n1 + n2

// HANDS ON LAB

function mostrarLista(array) {
  if (Array.isArray(array)) {
    if (array.length === 0) {
      console.log('Lista vacia')
    } else {
      array.forEach((elem) => console.log(elem))
      console.log(
        'La longitud del arreglo es de: ' + array.length + ' elementos'
      )
      console.log(`La longitud del arreglo es de: ${array.length} elementos`)
    }
  } else {
    console.log('no es un arreglo')
  }
}

//mostrarLista([1])

//CLASES

// const productos1 = {
//   nombre: 'Iphone',
//   precio: 500,
//   stock: 50,
// }

// const producto2 = {
//   nombre: 'Ipad',
//   precio: 200,
//   stock: 20,
// }

// const producto3 = {
//   nombre: 'Computador',
//   precio: 1200,
//   stock: 45,
// }

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }

  devolverNombre(){
    return this.nombre
  }
}
const producto1 = new Producto('Iphone',500,50)
const producto2 = new Producto('Ipad',200,40)
const producto3 = new Producto('Computador',1200,20)
//productos.push(producto1)
const productos = [producto1,producto2,producto3]
//console.log(producto1.devolverNombre())
//console.log(producto2.devolverNombre());
//console.log(producto1,producto2,producto3);
console.log(productos);