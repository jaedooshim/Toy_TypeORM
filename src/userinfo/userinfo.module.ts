import { Module } from '@nestjs/common';
import { UserinfoController } from './userinfo.controller';
import { UserinfoService } from './userinfo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from 'src/_common/entities/userinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfo])],
  controllers: [UserinfoController],
  providers: [UserinfoService],
})
export class UserinfoModule {}
