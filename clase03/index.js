// function saludar() {
//   return 'Buenos dias'
// }

// const segundaFun = (a, b) => {
//   return a + b
// }

// function terceraFun(a){
//     return function(){

//     }
// }

// segundaFun(5,4) // 10seg
// saludar() // 0 seg
// terceraFun(5) // 5 seg
// // necesita el resultado de segundaFun()

// const array = ['perro','gato','raton','loro']
// array.forEach((animal) => `${animal} modificado`)
// // array.filter()

// function cbFun(param) {
//   return `El usuario escribio: ${param}`
// }

// function funDos(p1, callback) {
//   const respuesta = callback(p1)
//   return respuesta
// }

// console.log(funDos('buenas noches', cbFun))

// // CB ANIDADOS

// const usuarios = []
// const familiares = []

function agregarFamiliar(usuarioId, infoFamiliar) {
  usuarios.findById(usuarioId, function (error, usuario) {
    if (error) {
      return error
    } else {
      familiares.findAllByLastName(
        usuario.lastname,
        function (error, familiares) {
          if (error) {
            return error
          } else {
            if (familiares.includes(infoFamiliar)) {
              return 'Este familiar ya existe'
            } else {
              familiares.createOne(infoFamiliar, function (error) {
                if (error) {
                  return error
                } else {
                  return ' Familiar creado con exito'
                }
              })
            }
          }
        }
      )
    }
  })
}

// CREAR UNA FUNCION PROMESA

// function promesaFun(a, b) {
//   return new Promise((resolve, reject) => {
//     if (a === 0 || b === 0) {
//       reject('Promesa rechazada')
//     } else {
//       resolve(a + b)
//     }
//   })
// }

// // .then .catch

// promesaFun(5,7)
// .then(resultado=>console.log(resultado))
// .catch(error=>console.log(error))

function agregarFamiliar(usuarioId, infoFamiliar) {
  usuarios
    .findById(usuarioId)
    .then((usuario) => {
      return familiares.findAllByLastName(usuario.lastname)
    })
    .then((familiares) => {
      if (familiares.includes(infoFamiliar)) {
        return 'Este familiar ya existe'
      } else {
        return familiares.createOne(infoFamiliar)
      }
    })
    .then(() => {
      return 'Familiar creado con exito'
    })
    .catch((error) => {
      return error
    })
}

/////

async function agregarFamiliar(usuarioId, infoFamiliar) {
  try {
    const usuario = await usuarios.findById(usuarioId)
    const familiares = await familiares.findAllByLastName(usuario.lastname)
    if (familiares.includes(infoFamiliar)) {
      return 'Este familiar ya existe'
    }
    await familiares.createOne(infoFamiliar)
    return 'Familiar creado con exito'
  } catch (error) {
    return error
  }
}
