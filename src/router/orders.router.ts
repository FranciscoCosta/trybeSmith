import { Router } from 'express';
import OrderController from '../controllers/Orders.controller';

const router = Router();

const orderController = new OrderController();

router.get('/', (req, res) => orderController.findAll(req, res));

export default router;