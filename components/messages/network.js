const bodyParser = require('body-parser');
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const app = express();
app.use(bodyParser.json());


router.get('/', (req, resp) => {
    console.log(req.headers)
    resp.header({
        "custom-header":"Nuestro valor personalizado, es un header seteado por mi"
    })
    response.succes(req, resp, 'Lista de mensajes')
})
// http://localhost:3000/message


router.post('/', (req, resp) => {

    controller.addMessage(req.body.user, req.body.message)
        .then(()=> response.succes(req, resp, 'Creado correctamente', 201))
        .catch(() => response.error(req, resp, 'Informacion invalida', 400, 'Error en el controlador'));

    // if (req.query.error == 'ok') {
    //     // response.error(req, resp, 'Error simulado', 400)
    //     response.error(req, resp, 'Error inesperado', 500, 'Es solo una simulacion de los errores')
    // } else {
    //     response.succes(req, resp, 'Creado correctamente', 201)
    // }
});
// http://localhost:3000/message?error=ok
// http://localhost:3000/message




module.exports = router;