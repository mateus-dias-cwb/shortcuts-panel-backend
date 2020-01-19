const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()


mongoose.connect('mongodb+srv://<user>:<password>@cluster0-9xuu2.gcp.mongodb.net/<bdname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)
