import express from 'express';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { usersController } from '../controllers/users.controller.js';

const usersRouter = express.Router();

const UsersController = new usersController()

usersRouter.get('/me', requireAccessToken, UsersController.getUser)

export { usersRouter };
