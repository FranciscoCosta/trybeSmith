import ProductModels from '../models/Products.models';
import { IProduct } from '../interfaces/products.interface';
import conneciton from '../models/connection'; 

export default class ProductsService {
  constructor(private productModels = new ProductModels(conneciton)) { }

  async create(name: string, amount: string): Promise<IProduct> {
    const product = await this.productModels.create(name, amount);
    return product;
  }
}
