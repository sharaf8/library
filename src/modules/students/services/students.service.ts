import { BadRequestException, Injectable } from '@nestjs/common';
import { StudentsRepository } from '../repositories/students.repository';
import { StudentsCommand } from '../dto/common/students.command';
import { StudentsResource } from '../dto/resources/students.resource';

@Injectable()
export class StudentsService {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  fixName(name: string) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }

  add(studentsDto: StudentsCommand): Promise<StudentsResource> {
    if (/^[1-12]-[A-Z]$/.test(studentsDto.class)) {
      throw new BadRequestException(
        'Class format should be in the form of Class-Grade (11-A, 12-B)',
      );
    }
    studentsDto.firstName = this.fixName(studentsDto.firstName);
    studentsDto.lastName = this.fixName(studentsDto.lastName);
    return this.studentsRepository.add(studentsDto);
  }

  findOne(firstName: string, lastName: string): Promise<StudentsResource[]> {
    firstName = this.fixName(firstName);
    lastName = this.fixName(lastName);
    return this.studentsRepository.findOne(firstName, lastName);
  }

  deleteStudent(email: string): Promise<boolean> {
    return this.studentsRepository.deleteStuden(email);
  }
}
