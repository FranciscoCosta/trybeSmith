import UserModels from '../models/Users.models';
import { IUser } from '../interfaces/users.interface';
import conneciton from '../models/connection'; 

export default class UserService {
  constructor(private userModels = new UserModels(conneciton)) { }

  async create(dados: IUser): Promise<IUser> {
    const user = await this.userModels.create(dados);
    return user;
  }
}
