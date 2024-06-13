import { authService } from "../services/auth.service.js";
import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";


export class authController {
    authService = new authService()

    authSignUp = async (req, res, next) => {

        try{
            const { email, password, name } = req.body

            const authSignUp = await this.authService.authSignUp(
                email, password, name
            )

            return res.status(HTTP_STATUS.CREATED).json({
                status: HTTP_STATUS.CREATED,
                message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
                authSignUp,
              });

        }catch(error){
            next(error)
        }
    }

    authSignIn = async (req, res, next) => {
        try{
            const { email, password } = req.body

            const authSignIn = await this.authService.authSignIn(email, password)
            
            
        }catch(error){
            next(error)
        }
        
    }
    
}