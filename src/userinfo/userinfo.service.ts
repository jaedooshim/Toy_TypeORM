import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInfoDto } from 'src/_common/dtos/createUserInfo.dto';
import { UserInfo } from 'src/_common/entities/userinfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserinfoService {
  constructor(
    @InjectRepository(UserInfo)
    private userinfoRepository: Repository<UserInfo>,
  ) {}

  async createUserInfo(userinfoData: CreateUserInfoDto): Promise<string> {
    const existuserinfo = await this.userinfoRepository.findOne({
      where: [{ like: userinfoData.like }],
    });
    if (existuserinfo) {
      throw new BadRequestException(
        '등록된 취미입니다...다른것으로 등록해주세요!',
      );
    }
    await this.userinfoRepository.save(userinfoData);
    return '정상적으로 등록되었습니다!!';
  }

  async findAllUserInfo(): Promise<UserInfo[]> {
    return await this.userinfoRepository.find();
  }

  async findOneUserInfo(userinfoId: number): Promise<UserInfo> {
    const findOneData = await this.userinfoRepository.findOne({
      where: { id: userinfoId },
    });
    if (!findOneData)
      throw new BadRequestException(
        '조회하신 USERINFO_ID는 존재하지 않습니다.',
      );
    return findOneData;
  }
}
