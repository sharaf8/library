import { IsNumber, IsString } from 'class-validator';

export class BooksResource {
  @IsString()
  title!: string;

  @IsNumber()
  InternationalStandardBookNumber!: string;

  @IsNumber()
  price!: number;
}
