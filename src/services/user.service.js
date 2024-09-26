const User = require("../models/user.model");
const { userRepository } = require("../repositories");
const { compare } = require("bcrypt");
const { jwtToken } = require("../utils/auth.utils");
const config = require("../config/config");
const { errorResponse } = require("../utils/common.utils");

const createUser = async (body) => {
    // Implement logic to create a user
    const { name, username, password, bio } = body;
    const avatar = {
        public_id: 'example-public-id',
        url: 'example-url'
    }
    const user = {
        name,
        username,
        password,
        bio,
        avatar
    }
    const newUser = await userRepository.createUser(user)
    return newUser;
}

const login = async (body) => {
    // Implement logic to login a user
    const { username, password } = body;
    const user = await userRepository.getUser({ username }, { select: '+password' });
    if (!user) throw errorResponse(401, "Invalid credentials!")
    const isMatch = await compare(password, user.password)
    if (!isMatch) throw errorResponse(401, "Invalid credentials!")
    const token = jwtToken({
        id: user._id,
        username: user.username
    }, config.JWT_SECRET);

    return { user, token };
}

const getUser = async (id) => {
    // Implement logic to get a user
    const user = await userRepository.getUser({ _id: id });
    if (!user) throw errorResponse(404, "User not found!")
    return user;
}

module.exports = { createUser, login, getUser }