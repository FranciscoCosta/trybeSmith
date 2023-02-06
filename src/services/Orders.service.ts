import OrderModels from '../models/Orders.models';
import { IOrders } from '../interfaces/orders.interface';
import conneciton from '../models/connection'; 

export default class OrderService {
  constructor(private orderModels = new OrderModels(conneciton)) { }

  async findAll(): Promise<IOrders[]> {
    const products = await this.orderModels.findAll();
    return products;
  }
}
