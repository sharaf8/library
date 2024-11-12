import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BorrowingEntity } from '../entities/borrowing.entity';
import { BorrowingDto } from '../dto/commands/borrowing.dto';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BorrowingRepository {
  constructor(
    @InjectRepository(BorrowingEntity)
    private readonly borrowingRepository: Repository<BorrowingEntity>,
  ) {}

  async findOne(id: number) {
    return await this.borrowingRepository.findOne({ where: { id: id } });
  }

  async create(createBorrowing: BorrowingDto) {
    const borrow = await this.borrowingRepository.create(createBorrowing);

    return await this.borrowingRepository.save(borrow);
  }
}
