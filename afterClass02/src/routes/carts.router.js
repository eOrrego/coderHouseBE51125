import { Router } from 'express'
import { ManagerCart } from '../managerCart.js'
import { __dirname } from '../utils.js'

const router = Router()
const managerCart = new ManagerCart(__dirname + '/Carts.json')
// crear carrito
router.post('/', async (req, res) => {
  const newCart = await managerCart.createCart()
  res.json({ cart: newCart })
})

//buscar un carrito
router.get('/:idCart', async (req, res) => {
  const { idCart } = req.params
  const cart = await managerCart.getCart(~~idCart)
  res.json({ cart })
})

//agregar producto a un carrito
router.post('/:idCart/product/:idProduct', async(req, res) => {
const {idCart, idProduct} = req.params
const addproduct = await managerCart.addProductToCart(+idCart,+idProduct)
res.json({message:addproduct})
})
export default router
