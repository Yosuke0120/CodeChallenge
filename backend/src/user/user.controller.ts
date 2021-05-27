import {
  Body,
  Controller,
  Param,
  Get,
  Delete,
  Post,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const user = await this.userService.create(createUserDto);
    res.status(HttpStatus.CREATED).json(user);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.userService.list();
    res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const user = await this.userService.retrieve(id);
    res.status(HttpStatus.OK).json(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ) {
    const user = await this.userService.update(id, updateUserDto);
    res.status(HttpStatus.OK).json(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    await this.userService.delete(id);
    res.status(HttpStatus.OK);
  }
}
