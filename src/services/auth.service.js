import { usersRepository } from "../repositories/users.repository.js";
import bcrypt from 'bcrypt'
import { HASH_SALT_ROUNDS } from "../constants/auth.constant.js";
import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { ACCESS_TOKEN_EXPIRES_IN } from "../constants/auth.constant.js";
import { ACCESS_TOKEN_SECRET } from "../constants/env.constant.js";
import jwt from 'jsonwebtoken'

export class authService {
    usersRepository = new usersRepository()

    authSignUp = async (email, password, name) => {
        
        const existedUser = await this.usersRepository.getUserEmail(email)
        
        const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);
        
        const authSignUp = await this.usersRepository.postUser(
            email, hashedPassword, name
        )

        if(existedUser){
            return HTTP_STATUS.CONFLICT
        }
        else{
            return authSignUp
        }
        


    }
    

    authSignIn = async (email, password) => {
        
        const authSignIn = await this.usersRepository.getUser(email)

        const isPasswordMatched = authSignIn && bcrypt.compareSync(password, authSignIn.password);

        if(!isPasswordMatched){
            return HTTP_STATUS.UNAUTHORIZED
        }

        else{
            const payload = { id: authSignIn.id };

            const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
            expiresIn: ACCESS_TOKEN_EXPIRES_IN,
            });

            return accessToken
        }

    }
}