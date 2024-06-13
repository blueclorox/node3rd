import { prisma } from '../utils/prisma.util.js'

export class usersRepository {
    getUser = async () => {
        const userData = await prisma.user.findMany()

        return userData
    }

    getUserEmail = async (email) => {
        const existedUser = await prisma.user.findUnique({ where: { email }})

        return existedUser
    }

    postUser = async (email, password, name) => {
        const postUser = await prisma.user.create({
            data: {
                email, password, name
            }
        })

        return postUser
    }
}