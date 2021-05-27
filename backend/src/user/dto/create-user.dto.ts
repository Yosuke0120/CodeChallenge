import { IsEmail, IsNotEmpty } from 'class-validator';

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
  role: string;
}
