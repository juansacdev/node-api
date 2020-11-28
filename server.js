const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

// const router = require('./components/messages/network')
// app.use(router)

const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user_juan:Agudelo200023@cluster0.cw9zl.mongodb.net/db_prueba?retryWrites=true&w=majority')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
router(app)
router(app.use(bodyParser.json()))
// app.use('/', (req, resp) => resp.send('Hola Mundo desde Node.js con Express a ver'))

app.listen(PORT, () => console.log(`Aplicacion en http://localhost:${PORT}`))
app.use('/app', express.static('public'))

