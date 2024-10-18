import { CreateUserDto } from '@app/common';
import {
  IsInt,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserInputDto implements CreateUserDto {
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  username: string;

  @IsString()
  @MinLength(6)
  @MaxLength(12)
  password: string;

  @IsInt()
  @IsPositive()
  age: number;
}
