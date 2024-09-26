exports.response = (res, statusCode, message, data = "", success = true) => {
    return res.status(statusCode).json({
        success,
        message,
        data
    })
}

exports.errorResponse = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode
    return error;
}

exports.asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};
