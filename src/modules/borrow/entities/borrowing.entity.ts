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
  booksId: string;

  @ManyToOne(() => BooksEntity, (bk) => bk.borrowings, { onDelete: 'CASCADE' })
  book: BooksEntity;

  @Column()
  studentId: string;

  @ManyToOne(() => StudentsEntity, (st) => st.borrowings, {
    onDelete: 'CASCADE',
  })
  student: StudentsEntity;

  @CreateDateColumn({ type: 'timestamp' })
  borrow_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  return_date: Date;
}
