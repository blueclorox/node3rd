import { HTTP_STATUS } from "../constants/http-status.constant";
import { MESSAGES } from "../constants/message.constant";
import { usersRepository } from "../repositories/users.repository";

export class usersController {
    usersRepository = new usersRepository()

    getUser = async (req, res, next) => {
        try{
            const data = await this.usersRepository.getUser()

            return res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.USERS.READ_ME.SUCCEED,
                data,
            })
        }catch(error){
            next(error)
        }
    }
}