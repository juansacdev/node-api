const bodyParser = require('body-parser');
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const app = express();
app.use(bodyParser.json());


router.get('/', (req, resp) => {

    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then(messageList => response.succes(req, resp, messageList, 200))
        .catch(error => response.error(req, resp, 'Unexpected Error', 500, error));

})
// http://localhost:3000/message
// Trae todos los mensajes de todos los chats, si no se filtra
// http://localhost:3000/message?chat=#id_chat


router.post('/', (req, resp) => {

    controller.addMessages(req.body.chat, req.body.message)
        .then(fullMessage => response.succes(req, resp, fullMessage, 201))
        .catch(error => response.error(req, resp, 'Informacion invalida', 400, `Error en el controlador ${error}`));

});
// http://localhost:3000/message
// el chat #id


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