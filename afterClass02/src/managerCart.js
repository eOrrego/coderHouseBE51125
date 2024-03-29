import fs from 'fs'

export class ManagerCart {
  constructor(path) {
    this.path = path
  }
  async getCarts() {
    if (fs.existsSync(this.path)) {
      const cartsFile = await fs.promises.readFile(this.path, 'utf-8')
      return JSON.parse(cartsFile)
    } else {
      return []
    }
  }
  async getCart(id) {
    const cartsFile = await this.getCarts()
    const cart = cartsFile.find((cart) => cart.id === id)
    if (cart) {
      return cart
    } else {
      return null
    }
  }

  async createCart() {
    const cartsFile = await this.getCarts()
    const newCart = {
      id: this.#generarId(cartsFile),
      products: [],
    }
    cartsFile.push(newCart)
    await fs.promises.writeFile(this.path, JSON.stringify(cartsFile))
    return newCart
  }

  async addProductToCart(idCart, idProduct) {
    if(!idProduct || !idCart) return 'Faltan datos'
    const cart = await this.getCart(idCart)
    if (!cart) return 'Cart does not exist'
    // validacion que el producto que nos piden exista

    const productIndex = cart.products.findIndex((p) => p.product === idProduct)
    if (productIndex === -1) {
      cart.products.push({ product: idProduct, quantity: 1 })
    } else {
      cart.products[productIndex].quantity++
    }

    // sobreescribir el archivo
    const cartsFile = await this.getCarts()
    const cartIndex = cartsFile.findIndex((c) => c.id === idCart)
    cartsFile.splice(cartIndex, 1, cart)
    await fs.promises.writeFile(this.path, JSON.stringify(cartsFile))
    return 'product added'
  }

  #generarId = (carts) => {
    let id
    if (carts.length === 0) {
      id = 1
    } else {
      id = carts[carts.length - 1].id + 1
    }
    return id
  }
}
