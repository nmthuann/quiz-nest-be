import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';

import { UserDto } from '../domains/dtos/user.dto';
import { IUserRepository } from '../repositories/user.repository';

export interface IUserService {
  findById(id: string): Promise<UserDto>;
}

@Injectable()
export class UserService implements IUserService {
  public logger: Logger;

  constructor(
    @Inject('IUserRepository')
    public readonly userRepository: IUserRepository,
  ) {
    this.logger = new Logger(UserService.name);
  }

  public async findById(id: string): Promise<UserDto> {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) {
        throw new NotFoundException(`Cannot found user with id: ${id}`)
      }

      return new UserDto(user);
    } catch (error) {
      this.logger.error(error);

      throw error;
    }
  }
}
