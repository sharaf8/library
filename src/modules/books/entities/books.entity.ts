import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BorrowingEntity } from '../../borrow/entities/borrowing.entity';

@Entity('books')
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
}
