import { Module } from '@nestjs/common';
import { BooksService } from './services/books.service';
import { BooksRepository } from './repositories/books.repository';
import { BooksController } from './controllers/books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksEntity } from './entities/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity])],
  providers: [BooksService, BooksRepository],
  controllers: [BooksController],
})
export class BooksModule {}
