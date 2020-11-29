const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}


exports.succes = function (req, resp, msg, status) {
    let statusCode = status
    let statusMessage = msg
    if(!status) {
        status = 200
    }
    if(!msg) {
        statusMessage = statusMessages[status]
    }
    resp.status(statusCode).send({
        error: '',
        body:statusMessage
    })
}

exports.error = function (request, resp, msg, status, details) {
    console.error(`[Response error] ${details}`)
    resp.status(status || 500).send({
        error: msg,
        body:''
    })
}