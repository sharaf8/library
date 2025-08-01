import { IsNumber, IsString } from 'class-validator';

export class BooksResource {
  @IsString()
  id: string;

  @IsNumber()
  bookNumber!: string;

  @IsNumber()
  price!: number;
}
