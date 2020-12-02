const express = require('express');
const app = express();
const server = require('http').Server(app);


const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const config = require('./config')
const router = require('./network/routes')
const db = require('./db')




db(config.dbURI)


app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

socket.connect(server)

router(app)
router(app.use(bodyParser.json()))

server.listen(config.port, () => console.log(`Aplicacion en ${config.host}${config.port}`))
app.use('/', express.static('public'))