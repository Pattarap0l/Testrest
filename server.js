require('dotenv').config()

const express = require('express')
const { use } = require('express/lib/application')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subcribersRouter = require('./routes/subscribers')
app.use('/subscribers',subcribersRouter)

app.get ("/", (req, res) => {
    res.send ("Hello Node.js REST Server");
});

app.listen(3000, () => console. log('Server Started'))