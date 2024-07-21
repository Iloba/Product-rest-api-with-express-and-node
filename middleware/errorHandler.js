const errorHandler = (error, req, res, next) => {
    return res.status(404).json(error.message);
}

module.exports = errorHandler;