// ES7

const expNum = Math.pow(4, 3)
const expNumES7 = 4 ** 3
//console.log(expNum,expNumES7);

const arrayNum = [1, 2, 3, 4, 7, 8, 9, 0]
//console.log(arrayNum.includes(5));

// ES8

const obj = {
  nombre: 'Juan',
  apellido: 'Herrera',
  edad: 38,
  esCasado: true,
}

//console.log('entries',Object.entries(obj));
//console.log('values',Object.values(obj));
//console.log('keys',Object.keys(obj));

const objArray = Object.entries(obj)
const objArrayMod = objArray.map(([key, value]) => [key, `${value} modificado`])
//console.log(objArrayMod);
const objMod = Object.fromEntries(objArrayMod)
//console.log(objMod);

//ES9
const animales1 = ['perro', 'gato', 'pajaro', 'raton']
const animales2 = ['vaca', 'toro', 'caballo', 'cerdo']
const obj1 = {
  nombre: 'Lautaro',
  apellido: 'Perez',
}
const obj2 = {
  edad: 45,
  esCasado: true,
}
//const animales = animales1.concat(animales2)
const animales = [...animales1, ...animales2]
const objUsusario = { ...obj1, ...obj2 }
//console.log(objUsusario);

const objUsuarioCopia = { ...objUsusario, curso: 'BackEnd' }
objUsuarioCopia.nombre = 'Roger'
//console.log(objUsuarioCopia);
//console.log(objUsusario)

const functionUno = (param1, param2, ...otrosParams) => {
  console.log(otrosParams)
}

//functionUno(1,2,3,4,5,6,7,8,9,0)
const { nombre, apellido, ...otraInfo } = objUsuarioCopia
//console.log(otraInfo)

//ES10

const saludo = '      hola a todos como estan?       '
//console.log(saludo);
//console.log(saludo.trim());

const array = [1, 2, 3, 4, [5, 6, 7, 8], [9, 0, 1, 2, [3, 4, 5, 6, 7]]]
//console.log(array.flat(Infinity));

// ES11

// ??

const numero = 0
//console.log(numero || 10) // 0 // null - undefined - 0 - '' - NaN
//console.log(numero ?? 10) // 0 // null - undefined

// HANDS ON LAB

class TicketManager {
  #precioBaseDeGanacia = 15
  constructor() {
    this.eventos = []
  }

  getEventos() {
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.#generarId(),
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanacia,
      capacidad,
      fecha,
      participantes: [],
    }
    this.eventos.push(evento)
  }

  #generarId() {
    const id =
      this.eventos.length === 0
        ? 1
        : this.eventos[this.eventos.length - 1].id + 1
    return id
  }
}

const manager = new TicketManager()
manager.agregarEvento('evento1', 'lugar1', 50)
manager.agregarEvento('evento2', 'lugar2', 100)
console.log(manager)

//const array = ['pato','caballo','pollo']
// length 3
// array[3-1]
