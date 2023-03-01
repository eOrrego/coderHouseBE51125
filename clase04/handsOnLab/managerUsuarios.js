const fs = require('fs')

const path = 'Usuarios.json'

class ManagerUsuarios {
    constructor(path){
        this.path = path
    }
  consultarUsuarios = async () => {
    if (fs.existsSync(this.path)) {
      const infoArchivo = await fs.promises.readFile(this.path, 'utf-8')
      const usuarios = JSON.parse(infoArchivo)
      return usuarios
    } else {
      console.log('Archivo no existe')
      return []
    }
  }

  crearUsuario = async (usuario) => {
    const usuarios = await this.consultarUsuarios()
    let id
    if (usuarios.length === 0) {
      id = 1
    } else {
      id = usuarios[usuarios.length - 1].id + 1
    }
    const nuevoUsuario = { id, ...usuario }
    usuarios.push(nuevoUsuario)
    await fs.promises.writeFile(this.path, JSON.stringify(usuarios))
    return nuevoUsuario
  }
}

const usuario1 = {
    nombre:'Juan',
    apellido: 'Hoyos'
}

const usuario2 = {
    nombre: 'Luis',
    apellido: 'Abello'
}


async function prueba() {
  const manager = new ManagerUsuarios('Usuarios.json')
  //await manager.crearUsuario(usuario2)
  const usuarios = await manager.consultarUsuarios()
  console.log(usuarios)
}

prueba()

id =1
nombre: 'Iphone12'

