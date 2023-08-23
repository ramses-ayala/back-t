
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const authUsersController = (req, res) => {
    res.status(200).json({"msg": "hello"});
}

module.exports = authUsersController;