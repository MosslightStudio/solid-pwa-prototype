import Express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

const server = Express()

server.use(Express.json({ limit: '100MB' }))

server.enable('trust proxy')

server.use('/', Express.static('dist'))

server.listen(process.env.port, () => {
    console.info(`server started on: http://localhost:${process.env.port}`)
})
