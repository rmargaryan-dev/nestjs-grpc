import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  AUTH_SERVICE,
  CreateUserDto,
  UpdateUserDto,
  USER_SERVICE_NAME,
  UserServiceController,
} from '@app/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserServiceController;

  constructor(@Inject(AUTH_SERVICE) private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceController>(USER_SERVICE_NAME);
  }

  public async create(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  public async findAll() {
    return this.userService.findAllUsers({});
  }

  public async findOne(id: number) {
    return this.userService.findOneUser({ id });
  }

  public async update(id: number, updateUserDto: Omit<UpdateUserDto, 'id'>) {
    return this.userService.updateUser({ ...updateUserDto, id });
  }

  public async remove(id: number) {
    return this.userService.removeUser({ id });
  }
}
