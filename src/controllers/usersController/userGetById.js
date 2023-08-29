const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUserById = async(req,res) => {

    const { id } = req.params;

    try {
        const user = await prisma.users.findUnique({
            where: {
                id
            }
        });

        if(!user) return res.status(404).json({"msg": "User not found"});

        res.status(200).json({"data": user});

    } catch (error) {
        throw new Error("Occurs an error getting the user by id --> ", error);
    }
}

module.exports = getUserById;