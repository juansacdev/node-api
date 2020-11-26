const express = require('express');
const bodyParser = require('body-parser')
const response = require('../../network/response');
const { request } = require('express');
const router = express.Router()
const app = express();
const PORT = 3000;



app.use(bodyParser.json())//Para poder trabajar con el body con json
// app.use(bodyParser.urlencoded({extended: false}))// Form URL encoded en Insomnia
app.use(router)
// app.use('/', (req, resp) => resp.send('Hola Mundo desde Node.js con Express a ver'))

app.listen(PORT, () => console.log(`Aplicacion en http://localhost:${PORT}`))

// Servir archivos estaticos.
// Asi podemos integrar el front con el back
// public es la carpeta donde se alojan todos los estaticos
// Si queremos acceder a ellos solo ponemos la ruta despues de /app/
app.use('/app', express.static('public'))


//Con esto solo mandaremos esta respuesta desde un metoto GET
router.get('/', (req, resp) => {
    console.log(req.query)
    if (req.query.error == 'ok') {
        // response.error(req, resp, 'Error simulado', 400)
        response.error(req, resp, 'Error inesperado', 500, 'Es solo una simulacion de los errores')
    } else {
        response.succes(req, resp, 'Creado correctamente', 201)
    }
})




//Con esto solo mandaremos esta respuesta desde un metoto POST
router.post('/', (req, resp) => resp.send('Hello from POST'))




router.get('/messages', (req, resp) => {
    console.log(req.headers)
    resp.header({
        "custom-header":"Nuestro valor personalizado, es un header seteado por mi"
    })
    response.succes(req, resp, 'Lista de mensajes')
})

router.post('/messages', (req, resp) => resp.send('Message added'))
router.delete('/messages', (req, resp) => resp.send('Message deleted'))