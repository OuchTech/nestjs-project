import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNotEmpty()
  @IsMongoId()
  author: string; // ID de l'utilisateur qui crée le post
}
