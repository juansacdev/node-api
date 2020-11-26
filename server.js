const express = require('express');
const bodyParser = require('body-parser')
const { request } = require('express');
const app = express();
const PORT = 3000;

// const router = require('./components/messages/network')
// app.use(router)

const router = require('./network/routes')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
router(app)
router(app.use(bodyParser.json()))
// app.use('/', (req, resp) => resp.send('Hola Mundo desde Node.js con Express a ver'))

app.listen(PORT, () => console.log(`Aplicacion en http://localhost:${PORT}`))
app.use('/app', express.static('public'))

