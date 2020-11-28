const bodyParser = require('body-parser');
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const app = express();
app.use(bodyParser.json());


router.get('/', (req, resp) => {

    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then(messageList => response.succes(req, resp, messageList, 200))
        .catch(e => response.error(req, resp, 'Unexpected Error', 500, e));

})
// http://localhost:3000/message
// http://localhost:3000/message?user=<user_name>


router.post('/', (req, resp) => {

    controller.addMessages(req.body.user, req.body.message)
        // .then(()=> response.succes(req, resp, 'Creado correctamente', 201))
        .then(fullMessage => response.succes(req, resp, fullMessage, 201))
        .catch(() => response.error(req, resp, 'Informacion invalida', 400, 'Error en el controlador'));

});
// http://localhost:3000/message


//Parametros de la ruta (URL). Eso significa los ":id"
router.patch('/:id', (req, resp) => {

    controller.updateMessage(req.params.id, req.body.message)
        .then( data => response.succes(req, resp, data, 200))
        .catch(error => response.error(req, resp, 'Error interno', 500, error));

})
//http://localhost:3000/message/<#id>


router.delete('/:id', (req, resp) => {

    controller.deleteMessage(req.params.id)
        .then(() => response.succes(req, resp, `Mensaje ${req.params.id} eliminado`, 200))
        .catch(error => response.error(req, resp, 'Error interno', 500, error))

})
//http://localhost:3000/message/<#id>


module.exports = router;