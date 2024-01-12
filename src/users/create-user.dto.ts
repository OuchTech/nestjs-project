import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 20)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(8, 100)
  readonly password: string;
}
