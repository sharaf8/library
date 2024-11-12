import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
