import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDto,
  Empty,
  FindOneUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  Users,
  UserServiceController,
  UserServiceControllerMethods,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  public async createUser(request: CreateUserDto): Promise<User> {
    return this.userService.createUser(request);
  }

  public async findAllUsers(request: Empty): Promise<Users> {
    return this.userService.findAll();
  }

  public async findOneUser(request: FindOneUserDto): Promise<User> {
    return this.userService.findById(request.id);
  }

  public async updateUser(request: UpdateUserDto): Promise<User> {
    return this.userService.update(request);
  }

  public async removeUser(request: FindOneUserDto): Promise<User> {
    return this.userService.remove(request.id);
  }

  public queryUsers(request: Observable<PaginationDto>): Observable<Users> {
    return {
      // @ts-ignore
      users: [] as User[],
    };
  }
}
