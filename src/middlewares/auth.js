const { JWT_SECRET } = require("../config/config");
const { verifyToken } = require("../utils/auth.utils");
const { asyncHandler, errorResponse } = require("../utils/common.utils");

const isAuthenticated = asyncHandler(async (req, res, next) => {
    // Implement logic to authenticate the user
    const token = req.cookies["chat-token"];
    if (!token) {
        throw errorResponse(401, "Unauthorized");
    };
    const decoded = verifyToken(token, JWT_SECRET)
    if (!decoded) {
        throw errorResponse(401, "Unauthorized");
    };
    req.user = decoded;
    next();
})

module.exports = isAuthenticated;