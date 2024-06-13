import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../domains/entities/user.entity';

export interface IUserRepository {
  findById(id: string): Promise<UserEntity | null>
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  public async findById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: {
        id: id as Uuid,
      },
    });
  }
}
