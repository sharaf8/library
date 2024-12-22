import { IsNumber, IsString } from 'class-validator';

export class BooksResource {
  @IsString()
  id: number;

  @IsNumber()
  bookNumber!: string;

  @IsNumber()
  price!: number;
}
