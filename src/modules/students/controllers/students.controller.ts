import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from '../services/students.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { StudentsResource } from '../dto/resources/students.resource';
import { StudentsCommand } from '../dto/common/students.command';

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
    @Param('firstName') firstName: string,
    @Param('lastName') lastName: string,
  ): Promise<StudentsResource[]> {
    return this.studentsService.findOne(firstName, lastName);
  }

  @Post('add-student')
  @ApiOperation({
    summary: 'Add a new student.',
    description: 'Add a new student to the university.',
  })
  @ApiResponse({ status: 201, description: 'The student added successfully.' })
  async add(@Body() student: StudentsCommand): Promise<StudentsResource> {
    return this.studentsService.add(student);
  }

  @Delete()
  @ApiOperation({
    summary: 'Delete a new student.',
    description: 'Delete a student from the university.',
  })
  async delete(@Param('email') email: string): Promise<boolean> {
    return this.studentsService.deleteStudent(email);
  }
}
