import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books') // or any table name you want
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
  InternationalStandardBookNumber: string;

  @Column()
  amount: number;

  @Column('float')
  price: number;
}