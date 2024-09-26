const cookieOptions = {
    maxAge: 10 * 24 * 60 * 60 * 1000,  // 10 days in milliseconds
    sameSite: 'Strict',                // Should be 'Strict', 'Lax', or 'None'
    httpOnly: true,                    // Makes cookie inaccessible to JavaScript (for security)
    secure: true                       // Send only over HTTPS
};

module.exports = cookieOptions;
