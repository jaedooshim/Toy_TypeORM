import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserInfoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  hobby: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  like: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  comment: string;
}
