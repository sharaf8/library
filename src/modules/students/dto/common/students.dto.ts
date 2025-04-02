import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Matches } from 'class-validator';

export class StudentDto {
  @ApiProperty({
    example: 'Sharaf',
    description: 'The first name of the student',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Niyozov',
    description: 'The last name of the student',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: '11-B',
    description: 'The class and grade of the student',
  })
  @IsString()
  @Matches(/^[1-12]-[A-Z]$/, {
    message: 'Class should be in format Class-Grade (1-A, 12-B)',
  })
  class: string;

  @ApiProperty({
    example: 'eshmatovto.toshmat1@gmail.com',
    description: 'The email of the student',
  })
  @IsEmail()
  @IsString()
  email: string;
}
