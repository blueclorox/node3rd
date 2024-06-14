import express from 'express';
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js';
import { signInValidator } from '../middlewares/validators/sign-in-validator.middleware.js';
import { authController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

const AuthController = new authController()

authRouter.post('/sign-up', signUpValidator, AuthController.authSignUp)

authRouter.post('/sign-in', signInValidator, AuthController.authSignIn)


export { authRouter };
