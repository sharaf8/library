import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BorrowingEntity } from '../entities/borrowing.entity';
import { BorrowingDto } from '../dto/commands/borrowing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BorrowingResource } from '../dto/resources/borrowing.resource';

@Injectable()
export class BorrowingRepository {
  constructor(
    @InjectRepository(BorrowingEntity)
    private readonly borrowingRepository: Repository<BorrowingEntity>,
  ) {}

  async findOne(id: number): Promise<BorrowingResource> {
    return await this.borrowingRepository
      .createQueryBuilder('b')
      .select(['b.booksId', 'b.studentId', 'b.borrow_date', 'b.return_date'])
      .where('b.id = :id', { id })
      .getOne();
  }

  async create(createBorrowing: BorrowingDto): Promise<BorrowingResource> {
    const borrow = this.borrowingRepository.create(createBorrowing);

    return await this.borrowingRepository.save(borrow);
  }
}
