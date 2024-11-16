import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
