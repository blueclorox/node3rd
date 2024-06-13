import { prisma } from '../utils/prisma.util.js'

export class usersRepository {
    getUser = async () => {
        const userData = await prisma.user.findMany()

        return userData
    }
}