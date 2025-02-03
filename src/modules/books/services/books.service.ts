import { BadRequestException, Injectable } from '@nestjs/common';
import { BooksRepository } from '../repositories/books.repository';
import { CreateBooksDto } from '../dto/command/createBooksDto';
import { BooksResource } from '../dto/resource/books.resource';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) {}

  async create(createBooksDto: CreateBooksDto) {
    if (
      !/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(
        createBooksDto.publicationYear,
      )
    ) {
      throw new BadRequestException(
        'Publication year must be in the format dd-mm-yy (11-05-09)',
      );
    }
    return this.booksRepository.create(createBooksDto);
  }

  async find(title: string): Promise<BooksResource> {
    return this.booksRepository.findOne(title);
  }

  async delete(title){
    return this.booksRepository.delete(title);
  }
}
