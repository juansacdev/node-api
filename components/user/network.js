const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, resp) => {
    controller.getUsers()
        .then(users => response.succes(req, resp, users, 200))
        .catch(error => response.error(req, resp, 'Unexpected Error', 500, error))
})
//http://localhost:3000/user
//Trae todos los usuarios

router.post('/', (req, resp) => {
    controller.addUser(req.body.name)
        .then(data => response.succes(req, resp, data, 201))
        .catch(error => response.error(req, resp, 'Internal Error', 500, error))
})
//http://localhost:3000/user
//Agrega un usuario. Solo necesita que se le pase el nombre



module.exports = router