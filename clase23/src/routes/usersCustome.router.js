import Router from './customeRouter.js'

class UsersRouter extends Router {
  init() {
    this.get('/', (req, res) => {
      res.successResponse('Todo marcha bien')
    })

    this.get('/error', (req, res) => {
      res.errorResponse('Se presento un error')
    })
  }
}

export const usersRouter = new UsersRouter()
