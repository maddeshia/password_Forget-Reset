const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// register
router.post("/userRegister", userController.userRegister);

// login
router.post("/login", userController.Login);

// forget password
router.post("/forgetPassword", userController.forgetPassword);

// reset password
router.get("/resetPassword", userController.resetPassword);

module.exports = router;