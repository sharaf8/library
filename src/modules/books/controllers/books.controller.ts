import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BooksService } from '../services/books.service';
import { CreateBooksDto } from '../dto/command/createBooksDto';
import { BooksResource } from '../dto/resource/books.resource';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('create-books')
  @ApiOperation({
    summary: 'Add a new book',
    description: 'Add a new book in the library.',
  })
  @ApiResponse({
    status: 200,
    description: 'Added a new book successfully.',
  })
  create(@Body() book: CreateBooksDto): Promise<BooksResource> {
    return this.booksService.create(book);
  }

  @Get('get-book/:title')
  @ApiOperation({
    summary: 'Ger the book',
    description: 'Get a book by title',
  })
  @ApiResponse({
    status: 200,
    description: 'Finded the book by its name.',
  })
  @ApiResponse({ status: 404, description: 'Not Found the book' })
  async find(@Param('title') title: string): Promise<BooksResource> {
    return this.booksService.find(title);
  }
}