const errorMiddleware = (error, req, res, next) => {
    const message = error.message || "Internal Server Error";
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ success: false, message });
}
module.exports = errorMiddleware;