import dotenv from 'dotenv'
import program from './commander.js'

const mode = program.opts().mode

dotenv.config({
    path: mode === 'stage' ? '.env.stage' : '.env.development'
})

export default {
    port: process.env.PORT,
    token: process.env.TOKEN,
}