import { Router } from 'express';
import ProductsController from '../controllers/Products.controller';

const router = Router();

const productController = new ProductsController();

router.post('/', (req, res) => productController.create(req, res));
router.get('/', (req, res) => productController.findAll(req, res));

export default router;