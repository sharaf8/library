import { IsString, IsNumber, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBooksDto {
  @ApiProperty({
    example: 'Don Quixote',
    description: 'The name of the book',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Niyozov Sharaf',
    description: 'The name of the author of the book',
  })
  @IsString()
  author!: string;

  @ApiProperty({
    example: 'modern novel',
    description: 'The genre of the book',
  })
  @IsString()
  genre?: string;

  @ApiProperty({
    example: '11-05-2009',
    description: 'The publication year of the book (in the format: DD-MM-YYYY)',
  })
  @Matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/, {
    message: 'Publication year must be in the format dd-mm-yy (11-05-09)',
  })
  publicationYear!: string;

  @ApiProperty({
    example: '978-3-16-148410-0',
    description: 'The International Standard Book Number (ISBN) of the book',
  })
  @IsString()
  InternationalStandardBookNumber!: string;

  @ApiProperty({
    example: '100',
    description: 'The amount of books available',
  })
  @IsNumber()
  amount!: number;

  @ApiProperty({
    example: '19.99',
    description: 'The price of the book in USD',
  })
  @IsNumber()
  price!: number;
}
