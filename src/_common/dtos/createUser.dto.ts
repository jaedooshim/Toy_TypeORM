import {
  IsNotEmpty,
  MaxLength,
  IsString,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(10)
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  age: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  height: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  weight: number;
}
