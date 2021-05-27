import { Injectable } from '@nestjs/common';
import { ApiStatusModel } from './api-status.model';

@Injectable()
export class AppService {
  getAPIStatus(): ApiStatusModel {
    const status = new ApiStatusModel();
    status.code = 200;
    status.status = 'ok';
    return status;
  }
}
