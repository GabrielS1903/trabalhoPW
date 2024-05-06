import express from 'express'
import mongoose from 'mongoose'
import userController from './controllers/user.js'
import databaseConnection from './utils/databaseConnection.js'

const app = express()
app.use(express.json())
const port = 3000

app.get("/", (request, response) => {
  response.status(200).send("Bem vindo à API de Usuário!")
})

app.use('/usuario', userController)

app.listen(port, async () => {
  await databaseConnection()
  console.log(`App running in http://localhost:${port}`)
})