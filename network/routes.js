const express = require('express')
const message = require('../components/messages/network')


const routes = server => server.use('/messages', message )
// const routes = server => server.use('/', message )

module.exports = routes