import { IsDate, IsNumber, IsString } from 'class-validator';

export class BorrowingResource {
  @IsNumber()
  booksId: string;

  @IsNumber()
  studentId: string;

  @IsDate()
  @IsString()
  borrow_date: Date;

  @IsDate()
  @IsString()
  return_date: Date;
}
