import { IsNumber, IsString } from 'class-validator';

export class BooksResource {
  @IsString()
  title!: string;

  @IsNumber()
  bookNumber!: string;

  @IsNumber()
  price!: number;
}
