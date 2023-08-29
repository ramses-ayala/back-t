const { Router } = require("express");
const router = Router();

const authUsersController = require("../../controllers/authController/auth.controller");

router.post(authUsersController);

module.exports = router;