import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsEntity } from '../entities/students.entity';
import { Repository } from 'typeorm';
import { StudentsResource } from '../dto/resources/students.resource';
import { AppHttpException } from '../../../filters/app-http.exeption';
import { ExceptionMessage } from '../../../enums/exception-message';
import { ExceptionLocalCode } from '../../../enums/exception-local-code';
import { StudentsCommand } from '../dto/common/students.command';

@Injectable()
export class StudentsRepository {
  constructor(
    @InjectRepository(StudentsEntity)
    private readonly studentsRepository: Repository<StudentsEntity>,
  ) {}

  async findStudentByEmail(email: string): Promise<StudentsEntity> {
    const student = await this.studentsRepository
      .createQueryBuilder('s')
      .where('s.email = :email', { email })
      .getOne();

    return student;
  }

  async add(command: StudentsCommand): Promise<StudentsResource> {
    const existsStudent = await this.findStudentByEmail(command.email);
    console.log('existsStudent', existsStudent);
    if (existsStudent) {
      throw new AppHttpException(
        ExceptionMessage.EMAIL_EXISTS,
        HttpStatus.BAD_REQUEST,
        ExceptionLocalCode.EMAIL_EXISTS,
      );
    }
    const student = await this.studentsRepository.create(command);
    return await this.studentsRepository.save(student);
  }

  async findOne(
    firstName: string,
    lastName: string,
  ): Promise<StudentsResource[]> {
    const students = await this.studentsRepository
      .createQueryBuilder('s')
      .where('s.firstName = :firstName', { firstName })
      .andWhere('s.lastName = :lastName', { lastName })
      .getMany();

    return students;
  }

  async deleteStuden(email: string): Promise<boolean> {
    const student = await this.findStudentByEmail(email);

    if (!student) {
      return true;
    }

    await this.studentsRepository
      .createQueryBuilder('s')
      .delete()
      .where('s.email = :email', { email })
      .execute();

    return true;
  }
}
