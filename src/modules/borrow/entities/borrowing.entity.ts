import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { StudentsEntity } from '../../students/entities/students.entity';

@Entity('borrowing')
export class BorrowingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  book_id: number;

  @PrimaryGeneratedColumn()
  student_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  borrow_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  return_date: Date;

  @ManyToOne(() => StudentsEntity, { onDelete: 'CASCADE' })
  student: StudentsEntity;
}
