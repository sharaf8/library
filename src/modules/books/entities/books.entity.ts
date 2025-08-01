import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BorrowingEntity } from '../../borrow/entities/borrowing.entity';
import { BaseEntity } from '../../../configurations/entities/base.entity';

@Entity('books')
export class BooksEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  genre: string;

  @Column()
  publicationYear: string;

  @Column()
  bookNumber: string;

  @Column()
  amount: number;

  @Column('float')
  price: number;

  @OneToMany(() => BorrowingEntity, (br) => br.book)
  borrowings: BorrowingEntity[];
}
