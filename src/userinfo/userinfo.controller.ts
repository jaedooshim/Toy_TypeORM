import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserinfoService } from './userinfo.service';
import { CreateUserInfoDto } from 'src/_common/dtos/createUserInfo.dto';
import { UserInfo } from 'src/_common/entities/userinfo.entity';

@Controller('userinfo')
export class UserinfoController {
  constructor(private userinfoService: UserinfoService) {}

  /**@유저정보_작성 */
  @Post()
  async createUserInfo(
    @Body() userinfoData: CreateUserInfoDto,
  ): Promise<string> {
    return await this.userinfoService.createUserInfo(userinfoData);
  }

  /**@유저정보조회 */
  @Get()
  async findAllUserInfo(): Promise<UserInfo[]> {
    return await this.userinfoService.findAllUserInfo();
  }

  /**@유저정보_ID별조회 */
  @Get(':id')
  async findOneUserInfo(@Param('id') userinfoId: number): Promise<UserInfo> {
    return await this.userinfoService.findOneUserInfo(userinfoId);
  }
}
