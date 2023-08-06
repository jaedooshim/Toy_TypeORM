import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

import { User } from 'src/_common/entities/user.entity';
import { CreateUserDto } from 'src/_common/dtos/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /** @유저전체조회 */
  @Get()
  async findAllUser(): Promise<User[]> {
    return await this.userService.findAllUser();
  }

  /**@유저ID별_조회 */
  @Get(':id')
  async findOneUser(@Param('id') userId: number): Promise<User> {
    return await this.userService.findOneUser(userId);
  }

  /**@유저등록 */
  @Post()
  async createUser(@Body() userData: CreateUserDto): Promise<string> {
    return await this.userService.createUser(userData);
  }
}
