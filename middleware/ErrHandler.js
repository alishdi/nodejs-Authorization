const NotFoundErr = ((req, res, next) => {
    res.send({
        statusCode: 404,
        msg: 'NotFound Err'
    });

})

const ErrorHandler = ((err, req, res, next) => {
    res.send({
        statuscode: err?.status ?? err.statusCode ?? 500,
        msg: err?.message ?? ' internallserver Err'
    })

})


module.exports = {
    NotFoundErr,
    ErrorHandler
}

