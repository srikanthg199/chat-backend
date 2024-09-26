const jwt = require("jsonwebtoken");

const jwtToken = (data, jwtSecret) => {
    return jwt.sign(
        data,
        jwtSecret,
        // { expiresIn: "1h" }
    );
};

const verifyToken = (token, jwtSecret) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (err) {
        return false;
    }
}

// For bearer token
const authenticateToken = (req, jwtSecret) => {
    const { authorization } = req.headers;
    const token = authorization ? authorization.substr(authorization.indexOf(" ") + 1) : false;
    if (!token) {
        return false;
    } else {
        return jwt.verify(token, jwtSecret);
    }
}

module.exports = { authenticateToken, jwtToken, verifyToken };