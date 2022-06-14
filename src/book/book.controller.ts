import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { book } from 'src/DTO/book.dto';
import { filter } from 'src/DTO/filter.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}
    @Post('/createBooks')
    create(@Body(ValidationPipe)book:book){
        return this.bookService.create(book)
    }
    @Get('/createBooks')
    findAll(){
        return this.bookService.findAll() 
    }
    @Get('/getAllBooksByFilter')
    findAllBook(@Query() filterData: filter) {
      console.log(filterData);
      return this.bookService.findAllBook(filterData);
    }
}
