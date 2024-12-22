import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BorrowService } from '../services/borrow.service';
import { BorrowingDto } from '../dto/commands/borrowing.dto';
import { BorrowingResource } from '../dto/resources/borrowing.resource';

@ApiTags('Borrowing')
@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Get borrowing',
    description: 'Get borrowing by id',
  })
  findOne(@Param('id') id: number): Promise<BorrowingResource> {
    return this.borrowService.findOne(id);
  }

  @ApiOperation({
    summary: 'Create borrowing',
    description: 'Create borrowing by books and students id',
  })
  @Post('create-borrowing')
  add(@Body() borrowingDto: BorrowingDto): Promise<BorrowingResource> {
    return this.borrowService.add(borrowingDto);
  }
}
