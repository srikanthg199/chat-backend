const User = require("../models/user.model");

const createUser = async (payload) => {
    try {
        return await User.create(payload);
    } catch (error) {
        console.log("Error creating user");
    }
}

const getUser = async (filter, options = {}) => {
    try {
        // Use the filter for the query and apply additional options like 'select'
        return await User.findOne(filter).select(options.select || '');
    } catch (error) {
        console.log("Error fetching user");
    }
};


module.exports = { createUser, getUser };