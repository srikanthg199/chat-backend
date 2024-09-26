const { cookieOptions } = require("../constants/auth");
const { userService } = require("../services/index");
const { response, asyncHandler } = require("../utils/common.utils");

const createUser = asyncHandler(async (req, res, next) => {
    const user = await userService.createUser(req.body);
    return response(res, 201, user)
})

const login = asyncHandler(async (req, res, next) => {
    const { user, token } = await userService.login(req.body);
    return res.status(201)
        .cookie("chat-token", token, cookieOptions)
        .json({ success: true, message: "User logged in successfully", data: user });
})

const getUser = asyncHandler(async (req, res, next) => {
    const user = await userService.getUser(req.params.id);
    return response(res, 200, "User fetched successfully", user)
})

const getProfile = asyncHandler(async (req, res, next) => {
    const user = await userService.getUser(req.user.id);
    return response(res, 200, "User profile", user)
})

const logout = asyncHandler(async (req, res, next) => {
    return res.status(200)
        .cookie("chat-token", "", { ...cookieOptions, maxAge: 0 })
        .json({ success: true, message: "User logged out successfully" });
})



module.exports = { createUser, login, getUser, getProfile, logout }