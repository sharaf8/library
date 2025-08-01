import { Injectable } from '@nestjs/common';
import { BorrowingDto } from '../dto/commands/borrowing.dto';
import { BorrowingRepository } from '../repositories/borrowing.repository';
import { BorrowingResource } from '../dto/resources/borrowing.resource';

@Injectable()
export class BorrowService {
  constructor(private readonly borrowingRepository: BorrowingRepository) {}

  async add(borrow: BorrowingDto): Promise<BorrowingResource> {
    const borrowRecord = {
      ...borrow,
      borrow_date: new Date(),
      return_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    };

    return await this.borrowingRepository.create(borrowRecord);
  }

  async findOne(id: number): Promise<BorrowingResource> {
    return await this.borrowingRepository.findOne(id);
  }
}
