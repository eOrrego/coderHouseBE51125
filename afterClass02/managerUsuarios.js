const fs = require('fs')

//const path = 'Usuarios.json'

class ManagerUsuarios {
  constructor(path) {
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

  consultarUsuarioById = async (id) => {
    const usuarios = await this.consultarUsuarios()
    const usuario = usuarios.find((u) => u.id === id)
    if (usuario) {
      return usuario
    } else {
      return 'Usuario no existe'
    }
  }

  crearUsuario = async (usuario) => {
    const usuarios = await this.consultarUsuarios()
    const id = this.#generarId(usuarios)
    const nuevoUsuario = { id, ...usuario }
    usuarios.push(nuevoUsuario)
    await fs.promises.writeFile(this.path, JSON.stringify(usuarios))
    return nuevoUsuario
  }

  eliminarUsuarios = async () => {
    if (fs.existsSync(this.path)) {
      await fs.promises.unlink(this.path)
      return 'Usuarios eliminados'
    } else {
      return 'No existe este archivo'
    }
  }

  eliminarUsuarioById = async (id) => {
    const usuarios = await this.consultarUsuarios()
    const arrayUsuariosNuevo = usuarios.filter((u) => u.id !== id)
    await fs.promises.writeFile(this.path, JSON.stringify(arrayUsuariosNuevo))
  }

  actualizarUsuario = async (id, obj) => {
    const usuarios = await this.consultarUsuarios()
    const indexUsuario = usuarios.findIndex((u) => u.id === id)
    if (indexUsuario === -1) {
      return 'Usuario no encontrado'
    }
    const usuarioActualizado = { ...usuarios[indexUsuario], ...obj }
    usuarios.splice(indexUsuario, 1, usuarioActualizado)
    await fs.promises.writeFile(this.path, JSON.stringify(usuarios))
  }

  #generarId = (usuarios) => {
    let id
    if (usuarios.length === 0) {
      id = 1
    } else {
      id = usuarios[usuarios.length - 1].id + 1
    }
    return id
  }
}

const usuario1 = {
  nombre: 'Juan',
  apellido: 'Hoyos',
}

const usuario2 = {
  nombre: 'Luis',
  apellido: 'Abello',
}

async function prueba() {
  const manager = new ManagerUsuarios('Usuarios.json')
  //await manager.crearUsuario(usuario1)
  //await manager.crearUsuario(usuario2)
  //const usuarios = await manager.consultarUsuarios()
  //const usuario = await manager.consultarUsuarioById(5)
  //await manager.eliminarUsuarioById(8)
  //await manager.eliminarUsuarios()
  await manager.actualizarUsuario(12,{apellido:'Hernandez'})
  //console.log(usuario)
}

prueba()
