const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, resp) => {
    controller.getUsers()
        .then(userList => response.succes(req, resp, userList, 200))
        .catch(error => response.error(req, resp, 'Unexpected Error', 500, error))
})
//http://localhost:3000/user

router.post('/', (req, resp) => {
    controller.addUser(req.body.name)
        .then(data => response.succes(req, resp, data, 201))
        .catch(error => response.error(req, resp, 'Internal Error', 500, error))
})
//http://localhost:3000/user



module.exports = router