import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksEntity } from '../entities/books.entity';
import { CreateBooksDto } from '../dto/command/createBooksDto';
import { BooksResource } from '../dto/resource/books.resource';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectRepository(BooksEntity)
    private readonly booksRepository: Repository<BooksEntity>,
  ) {}

  async create(createBooksDto: CreateBooksDto): Promise<BooksResource> {
    const existingBook = await this.booksRepository.findOne({
      where: {
        bookNumber:
          createBooksDto.bookNumber,
      },
    });
    if (existingBook) {
      throw new ConflictException('This book already exists.');
    }

    const book = await this.booksRepository.create(createBooksDto);
    return await this.booksRepository.save(book);
  }

  async findOne(title: string): Promise<BooksResource> {
    const book = await this.booksRepository.findOne({
      where: { title: title },
    });

    if (!book)
      throw new NotFoundException('Can not find book with title ' + title + '');

    return {
      title: book.title,
      bookNumber: book.bookNumber,
      price: book.price,
    };
  }
}
