import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/_common/dtos/createUser.dto';
import { User } from 'src/_common/entities/user.entity';

import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**@유저전체조회 */
  async findAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /**@유저ID별조회 */
  async findOneUser(userId: number): Promise<User> {
    const findOneData = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!findOneData)
      throw new BadRequestException('등록되지 않은 유저입니다.');
    return findOneData;
  }

  /**@유저등록 */
  async createUser(userData: CreateUserDto): Promise<string> {
    const existUser = await this.userRepository.findOne({
      where: [{ name: userData.name }],
    });
    if (existUser) {
      throw new BadRequestException('등록된 유저입니다.');
    }
    await this.userRepository.save(userData);
    return '등록이 완료되었습니다!';
  }
}
