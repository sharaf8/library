import { Module } from '@nestjs/common';
import { StudentsService } from './services/students.service';
import { StudentsRepository } from './repositories/students.repository';
import { StudentsController } from './controllers/students.controller';

import { StudentsEntity } from './entities/students.entity';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([StudentsEntity])],
  providers: [StudentsService, StudentsRepository],
  controllers: [StudentsController],
})
export class StudentsModule {}
