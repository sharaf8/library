import { IsDate, IsNumber, IsString } from "class-validator";

export class BorrowingResource {
  @IsNumber()
  book_id: number;

  @IsNumber()
  student_id: number;

  @IsDate()
  @IsString()
  borrow_date: Date;

  @IsDate()
  @IsString()
  return_date: Date;
}
