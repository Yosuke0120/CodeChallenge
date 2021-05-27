import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from './role.enum';
export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: string;
}
