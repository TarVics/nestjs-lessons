import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  // private users = [];

  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getAll() {
    return this.userRepository.findAll();
  }

  async createUser(user: CreateUserDto) {
    // this.users.push({
    //   ...user,
    //   id: new Date().valueOf(),
    // });
    // return this.users[0];
    return this.userRepository.create(user);
  }
}
