const fs = require('fs')
const crypto = require('crypto')

const path = 'Usuarios.json'

class ManagerUsuario {
  consultarUsuarios = async () => {
    try {
      if (fs.existsSync(path)) {
        const data = await fs.promises.readFile(path, 'utf-8')
        return JSON.parse(data)
      } else {
        return []
      }
    } catch (error) {
      console.log(error)
    }
  }

  crearUsuario = async (obj) => {
    try {
      const users = await this.consultarUsuarios()
      const id = this.#generarId(users)
      const newUser = { id, ...obj }

      // key por usuario
      newUser.key = crypto.randomBytes(128).toString('base64')

      // encriptar hmac

      newUser.contrasena = crypto
        .createHmac('sha256', newUser.key)
        .update(newUser.contrasena)
        .digest('hex')

      users.push(newUser)
      await fs.promises.writeFile(path, JSON.stringify(users))
      return newUser
    } catch (error) {
      console.log(error)
    }
  }

  validarUsuario = async (username,contrasena) => {
    const users = await this.consultarUsuarios()
    const user = users.find(u=>u.username === username)
    if(!user){
        console.log('Usuario o Contrasena no validas');
    } else {
        const cryptoNuevaCon = crypto
        .createHmac('sha256', user.key)
        .update(contrasena)
        .digest('hex')

        if(user.contrasena === cryptoNuevaCon){
            console.log('Logueado');
        } else {
            console.log('Usuario o Contrasena no validas');
        }
    }
  }

  #generarId(array) {
    let id
    if (array.length === 0) {
      id = 1
    } else {
      id = array[array.length - 1].id + 1
    }
    return id
  }
}

const usuario1 = {
  nombre: 'Juan',
  apellido: 'Hoyos',
  username: 'jhoyos',
  contrasena: '12345',
}
const usuario2 = {
    nombre: 'Luis',
    apellido: 'Abello',
    username: 'labello',
    contrasena: 'abcde',
  }
  const usuario3 = {
    nombre: 'Carolina',
    apellido: 'Osorio',
    username: 'cosorio',
    contrasena: '123abc',
  }

const manager = new ManagerUsuario()
const prueba = async () => {
  //await manager.crearUsuario(usuario3)
  //const usuarios = await manager.consultarUsuarios()
  //console.log(usuarios)
  await manager.validarUsuario('labell','abcde')
}

prueba()
