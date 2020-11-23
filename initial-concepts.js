const express = require('express');
const bodyParser = require('body-parser')
//Nos permite separar cabeceras, metodos, url, etc.Peromite separar las peticiones.
const router = express.Router()
const app = express();
const PORT = 3000;


app.use(bodyParser.json())//Para poder trabajar con el body con json
// app.use(bodyParser.urlencoded({extended: false}))// Form URL encoded en Insomnia
app.use(router)
// app.use('/', (request, response) => response.send('Hola Mundo desde Node.js con Express a ver'))

app.listen(PORT, () => console.log(`Aplicacion en http://localhost:${PORT}`))


//Con esto solo mandaremos esta respuesta desde un metoto GET
router.get('/', (request, response) => {
    console.log(request.body)
    console.log(request.query)//Accedemos a los paramtros por Query (?orderBy=id&age=15)
    // response.send(`Hello from GET, "${request.body.text}" obtenido correctamente`)//Plana
    // response.status(201).send()//Vacia
    response.status(201).send({
        error: '',
        body:'Creado correctamente'
    })//Estructurada
})


//Con esto solo mandaremos esta respuesta desde un metoto POST
router.post('/', (request, response) => response.send('Hello from POST'))


//Examples a ver
router.get('/messages', (request, response) => {
    console.log(request.headers)
    response.header({
        "custom-header":"Nuestro valor personalizado, es un header seteado por mi"
    })
    response.send('List of messages')
})
router.post('/messages', (request, response) => response.send('Message added'))
router.delete('/messages', (request, response) => response.send('Message deleted'))