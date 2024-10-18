import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserInputDto } from './dto/create-user.input.dto';
import { UpdateUserInputDto } from './dto/update-user.input.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserInputDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  public async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserInputDto,
  ) {
    return this.userService.update(+id, { socialMedia: updateUserDto });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
