import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsEntity } from '../entities/students.entity';
import { Repository } from 'typeorm';
import { StudentDto } from '../dto/common/students.dto';
import { StudentsResource } from '../dto/resources/students.resource';

@Injectable()
export class StudentsRepository {
  constructor(
    @InjectRepository(StudentsEntity)
    private readonly studentsRepository: Repository<StudentsEntity>,
  ) {}

  async add(students: StudentDto): Promise<StudentsResource> {
    const existStudent = await this.studentsRepository.findOne({
      where: {
        email: students.email,
      },
    });
    if (existStudent) {
      throw new ConflictException('Student already exists');
    }
    const student = await this.studentsRepository.create(students);

    return await this.studentsRepository.save(student);
  }

  async findOne(
    firstName: string,
    lastName: string,
  ): Promise<StudentsResource> {
    const student = await this.studentsRepository.findOne({
      where: { firstName, lastName },
    });

    return student;
  }
}
