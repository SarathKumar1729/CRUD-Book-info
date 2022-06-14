import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/Entities/book.entity';
import { Author } from 'src/Entities/author.entity';
import { Category } from 'src/Entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book,Author,Category])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
