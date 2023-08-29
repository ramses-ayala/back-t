const { Router } = require("express");
const router = Router();

const getUserById = require("../../controllers/usersController/userGetById");
const signUp = require("../../controllers/usersController/signUp");

router.get("/getById",getUserById);
router.post("/signUp", signUp);

module.exports = router;