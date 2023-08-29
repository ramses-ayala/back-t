
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const generateToken = require("../../utils/generateToken");

const prisma = new PrismaClient();

const authUsersController = async(req, res) => {

    const {email, password} = req.body;

    try {
        
        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });

        if(!user) return res.status(404).json({"status": 404, "msg": "User not founf"});


        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(404).json({"status": 404, "msg": "Credentials are invalid"});


        const userToken = generateToken(user);

        res.status(200).json({"status": 200, user, userToken});
    } catch (error) {
        throw new Error('Occurs an error authenticating the user --> ', error);
    }
}

module.exports = authUsersController;