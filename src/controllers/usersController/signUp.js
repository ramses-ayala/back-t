const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");

const signUp = async(req,res) => {

    const { password } = req.body;

    console.log("body --> ", req.body);

    return;
    
    try {

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const userCreated = await prisma.users.create({
            data: req.body,
            password: encryptedPassword
        });

        res.status(200).json({"data": userCreated});

    } catch (error) {
        throw new Error("Occurs an error signing up a user --> ", error);
    }
}

module.exports = signUp;