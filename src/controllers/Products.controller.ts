import { Request, Response } from 'express';
import ProductsService from '../services/Products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, amount } = req.body;
    const product = await this.productsService.create(name, amount);
    return res.status(201).json(product);
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const result = await this.productsService.findAll();
    res.status(200).json(result);
  }
}