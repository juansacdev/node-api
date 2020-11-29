const express = require('express');
const bodyParser = require('body-parser')
const config = require('./config')
const app = express();



const db = require('./db')
const router = require('./network/routes')

db(config.dbURI)


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
router(app)
router(app.use(bodyParser.json()))

app.listen(config.port, () => console.log(`Aplicacion en ${config.host}${config.port}`))
app.use('/app', express.static('public'))