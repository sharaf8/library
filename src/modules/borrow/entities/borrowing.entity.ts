import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StudentsEntity } from '../../students/entities/students.entity';
import { BooksEntity } from '../../books/entities/books.entity';

@Entity('borrowing')
export class BorrowingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  book_id: number;

  @Column()
  student_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  borrow_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  return_date: Date;

  @ManyToOne(() => BooksEntity, (book) => book.borrowings)
  @JoinColumn({ name: 'book_id' })
  book: BooksEntity;

  @ManyToOne(() => StudentsEntity, (student) => student.borrowings)
  @JoinColumn({ name: 'student_id' })
  student: StudentsEntity;
}
