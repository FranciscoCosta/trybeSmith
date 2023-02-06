import { Router } from 'express';
import UserController from '../controllers/Users.controller';

const router = Router();

const userController = new UserController();

router.post('/', (req, res) => userController.create(req, res));

export default router;