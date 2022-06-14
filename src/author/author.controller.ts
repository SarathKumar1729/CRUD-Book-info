import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { author } from 'src/DTO/author.dto';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}
    @Post('/createAuthor')
    create(@Body(ValidationPipe)author:author){
        return this.authorService.create(author)
    }
    @Get('/createAuthor')
    findAll(){
        return this.authorService.findAll() 
    }
}
