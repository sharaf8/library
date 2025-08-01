import { Entity, Column, OneToMany, Unique } from 'typeorm';
import { BorrowingEntity } from '../../borrow/entities/borrowing.entity';
import { BaseEntity } from '../../../configurations/entities/base.entity';

@Entity('students')
@Unique(['email'])
export class StudentsEntity extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  class: string;

  @Column()
  email: string;

  @OneToMany(() => BorrowingEntity, (br) => br.student)
  borrowings: BorrowingEntity[];
}
