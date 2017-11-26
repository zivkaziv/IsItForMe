import { Router } from 'express';
import * as userController from '../controllers/user.controller';
const router = new Router();

// Get all rights from DB and save to DB
router.route('/users/login').get(userController.login);
router.route('/users/register').post(userController.register);

export default router;
