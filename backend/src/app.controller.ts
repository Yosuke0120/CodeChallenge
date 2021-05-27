import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAPIStatus(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.appService.getAPIStatus());
  }
}
