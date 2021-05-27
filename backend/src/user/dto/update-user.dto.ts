import { IsEmail, IsEnum, IsNotEmpty, Length } from 'class-validator';
import { Role } from './role.enum';
export class UpdateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  @Length(10)
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
