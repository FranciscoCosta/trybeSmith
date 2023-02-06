import { Request, Response } from 'express';
import UserServices from '../services/Users.service';
import generateJWT from '../utils/generateToken';

export default class ProductsController {
  constructor(private userServices = new UserServices()) { }

  async create(req: Request, res: Response): Promise<void> {
    const dados = req.body;
    const user = await this.userServices.create(dados);
    console.log(user);
    if (user) {
      const token = generateJWT(dados.username, Number(user.id));
      res.status(201).json({ token });
    }
  }
}