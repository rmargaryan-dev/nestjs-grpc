import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  AUTH_SERVICE,
  CreateUserDto,
  UpdateUserDto,
  USER_SERVICE_NAME,
  UserServiceClient,
  UserServiceController,
} from '@app/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject(AUTH_SERVICE) private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.userService =
      this.client.getClientByServiceName<UserServiceClient>(USER_SERVICE_NAME);
  }

  public async create(createUserDto: CreateUserDto) {
    try {
      console.log(createUserDto, '&&&&&&&&&');
      console.log(this.userService, '***********');

      return this.userService.createUser({
        username: 'Test User',
        password: 'Password123',
        age: 25,
      });
    } catch (e) {
      console.log(e, '$$$$$$');
    }
  }

  public async findAll() {
    return this.userService.findAllUsers({});
  }

  public async findOne(id: number) {
    return this.userService.findOneUser({ id });
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({ id, ...updateUserDto });
  }

  public async remove(id: number) {
    return this.userService.removeUser({ id });
  }
}
