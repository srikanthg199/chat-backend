
const { faker } = require("@faker-js/faker");
const User = require("../src/models/user.model");

const createUser = async (numUsers) => {
    try {
        const usersPromise = [];

        for (let i = 0; i < numUsers; i++) {
            const tempUser = User.create({
                name: faker.person.fullName(),
                username: faker.internet.userName(),
                bio: faker.lorem.sentence(10),
                password: "password",
                avatar: {
                    url: faker.image.avatar(),
                    public_id: faker.system.fileName(),
                },
            });
            usersPromise.push(tempUser);
        }

        await Promise.all(usersPromise);

        console.log("Users created", numUsers);
        process.exit(1);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = { createUser }