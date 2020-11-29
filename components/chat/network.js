const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/:userId', function(req, res) {
    controller.listChats(req.params.userId)
        .then(users => response.succes(req, res, users, 200))
        .catch(err => response.error(req, res, 'Internal error', 500, err));
});
//http://localhost:3000/chat/#user_id
//nos traer los chat que tenga ese usuario


router.post('/', function(req, res) {
    controller.addChat(req.body.users)
        .then(data => response.succes(req, res, data, 201))
        .catch(err => response.error(req, res, 'Internal error', 500, err));
});
//http://localhost:3000/chat/


module.exports = router;