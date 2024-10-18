import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto, User, Users } from '@app/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(createUserDto);
  }

  public async update(updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.update(updateUserDto);
  }

  public async remove(id: number): Promise<User> {
    return this.userRepository.remove(id);
  }

  public async findById(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }

  public async findAll(): Promise<Users> {
    const users = await this.userRepository.findAll();

    return { users };
  }
}
