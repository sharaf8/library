import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StudentsService } from '../services/students.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { StudentsResource } from '../dto/resources/students.resource';
import { StudentDto } from '../dto/common/students.dto';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get('get-student')
  @ApiOperation({
    summary: 'Find student',
    description: 'Get students by their first names and last names',
  })
  @ApiResponse({
    status: 200,
    description: 'Finded the student by her (his) first name and last name.',
  })
  @ApiResponse({ status: 404, description: 'Not Found the student' })
  async find(
    @Query('firstName') firstName: string,
    @Query('lastName') lastName: string,
  ): Promise<StudentsResource> {
    return this.studentsService.findOne(firstName, lastName);
  }

  @Post('add-student')
  @ApiOperation({
    summary: 'Add a new student.',
    description: 'Add a new student to the university.',
  })
  @ApiResponse({ status: 201, description: 'The student added successfully.' })
  async add(@Body() student: StudentDto): Promise<StudentsResource> {
    return this.studentsService.add(student);
  }
}
