import { Module } from '@nestjs/common';
import { BorrowService } from './services/borrow.service';
import { BorrowController } from './controllers/borrow.controller';
import { BorrowingEntity } from './entities/borrowing.entity';
import { BorrowingRepository } from './repositories/borrowing.repository';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([BorrowingEntity])],
  providers: [BorrowService, BorrowingRepository],
  controllers: [BorrowController],
})
export class BorrowModule {}
