exports.succes = function (req, resp, msg, status) {
    resp.status(status || 200).send({
        error: '',
        body:msg
    })
}

exports.error = function (request, resp, msg, status, details) {
    console.error(`[Respone error]' + ${details}`)

    resp.status(status || 500).send({
        error: msg,
        body:''
    })
}