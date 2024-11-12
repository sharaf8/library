import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

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
}
