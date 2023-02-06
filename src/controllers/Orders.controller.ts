import { Request, Response } from 'express';
import OrdersService from '../services/Orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  async findAll(req: Request, res: Response): Promise<void> {
    const result = await this.ordersService.findAll();
    res.status(200).json(result);
  }
}