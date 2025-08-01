import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async create(createBooksDto: CreateBooksDto): Promise<boolean> {
    const existingBook = await this.booksRepository.findOne({
      where: {
        bookNumber: createBooksDto.bookNumber,
        title: createBooksDto.title,
      },
    });
    if (existingBook) {
      throw new ConflictException('This book already exists.');
    }

    const book = this.booksRepository.create(createBooksDto);
    await this.booksRepository.save(book);
    return true;
  }

  async findOne(title: string): Promise<BooksResource> {
    const book = await this.booksRepository.findOne({
      where: { title: title },
    });

    if (!book)
      throw new NotFoundException('Can not find book with title ' + title + '');

    return {
      id: book.id,
      bookNumber: book.bookNumber,
      price: book.price,
    };
  }

  async delete(title: string) {
    const Book = await this.findOne(title);

    await this.booksRepository.delete(Book.id);
    return 'The book deleted successfully.';
  }
}
