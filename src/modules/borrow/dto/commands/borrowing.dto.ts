import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BorrowingDto {
  @ApiProperty({
    example: 1,
    description: 'The id of the book you want to rent.',
  })
  @IsNumber()
  @IsNotEmpty()
  booksId!: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the student who borrows the book from this library.',
  })
  @IsNumber()
  @IsNotEmpty()
  studentId!: string;
}
