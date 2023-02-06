import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findAll(): Promise<IOrders[]> {
    const [results] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT  orders.id, orders.user_id as userId, 
      JSON_ARRAYAGG(products.id) as productsIds 
      FROM Trybesmith.orders JOIN Trybesmith.products 
      ON products.order_id = orders.id GROUP BY orders.id`,
    );
    return results;
  }
}
