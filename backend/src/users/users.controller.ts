import { Controller, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/login')
  async logIn(@Body() userData: { email: string; password: string }) {
    return this.usersService.validateUser(userData.email, userData.password);
  }
}
