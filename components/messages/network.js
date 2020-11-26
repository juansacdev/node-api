const bodyParser = require('body-parser');
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const app = express();
app.use(bodyParser.json());


router.get('/', (req, resp) => {

    controller.getMessages()
        .then(messageList => response.succes(req, resp, messageList, 200))
        .catch(e => response.error(req, resp, 'Unexpected Error', 500, e));

})
// http://localhost:3000/message


router.post('/', (req, resp) => {

    controller.addMessages(req.body.user, req.body.message)
        // .then(()=> response.succes(req, resp, 'Creado correctamente', 201))
        .then(fullMessage => response.succes(req, resp, fullMessage, 201))
        .catch(() => response.error(req, resp, 'Informacion invalida', 400, 'Error en el controlador'));

});
// http://localhost:3000/message?error=ok
// http://localhost:3000/message




module.exports = router;