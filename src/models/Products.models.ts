import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name,amount) VALUES (?,?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      name,
      amount,
    };
    return newProduct;
  }

  async findAll(): Promise<IProduct[]> {
    const [results] = await this.connection.execute<IProduct & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return results as unknown as IProduct[];
  }
}
