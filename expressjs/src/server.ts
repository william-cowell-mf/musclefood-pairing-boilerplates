import express, { json } from 'express'
import encodeRouter from './routes/encode.route'
import decodeRouter from './routes/decode.route'
import statusRouter from './routes/status.route'

const app = express()

app.use(json());

app.use('/status', statusRouter)
app.use('/encode', encodeRouter);
app.use('/decode', decodeRouter);

const server = app.listen(3000)

export default server
