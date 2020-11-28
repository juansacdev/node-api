const express = require('express')
const message = require('../components/messages/network')
const user = require('../components/user/network')


const routes = server => {
    server.use('/messages', message );
    server.use('/users', user );
}
// const routes = server => server.use('/', message )

module.exports = routes