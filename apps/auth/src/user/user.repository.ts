import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../sequelize/models/user.model';
import { CreateUserDto, UpdateUserDto } from '@app/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({ ...createUserDto });
  }

  public async update(updateUserDto: UpdateUserDto): Promise<User> {
    const userToUpdate = await this.findById(updateUserDto.id);

    userToUpdate.set({ ...updateUserDto.socialMedia });
    await userToUpdate.save();

    return userToUpdate;
  }

  public async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  public async findById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  public async remove(id: number): Promise<User> {
    const userToDelete = await this.findById(id);
    await userToDelete.destroy();

    return userToDelete;
  }
}
