import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BorrowingEntity } from '../../borrow/entities/borrowing.entity';

@Entity('students')
export class StudentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  class: string;

  @Column()
  email: string;

  @OneToMany(() => BorrowingEntity, (borrowing) => borrowing.student)
  borrowings: BorrowingEntity[];
}
