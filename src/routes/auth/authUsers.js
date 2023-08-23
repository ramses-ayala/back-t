const { Router } = require("express");
const router = Router();

const authUsersController = require("../../controlers/authUsers/authUsersController");

router.get("/authUser", authUsersController);

module.exports = router;