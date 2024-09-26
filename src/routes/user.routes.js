const express = require('express');
const router = express.Router();
const { userController } = require("../controllers/index");
const { singleAvatar } = require('../middlewares/multer');
const isAuthenticated = require('../middlewares/auth');

router.post('/signup', singleAvatar, userController.createUser);

router.post('/login', userController.login);

router.get("/profile", isAuthenticated, userController.getProfile);

router.post('/logout', isAuthenticated, userController.logout);

router.get("/:id", isAuthenticated, userController.getUser);

module.exports = router;
