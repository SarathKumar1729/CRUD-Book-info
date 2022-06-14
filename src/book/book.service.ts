import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path';
import { from } from 'rxjs';
import { author } from 'src/DTO/author.dto';
import { book } from 'src/DTO/book.dto';
import { filter } from 'src/DTO/filter.dto';
import { Author } from 'src/Entities/author.entity';
import { Book } from 'src/Entities/book.entity';
import { Category } from 'src/Entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
        @InjectRepository(Author)
        private authorRepository: Repository<Author>,
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
      ) {}
      async findAll() {
       
        const result = await this.bookRepository.find({select: ['id', 'name','description','category','author']});
        return result;
      }
      async create(Bookdto:book) {
        const exists =(await this.bookRepository.count({ where: { name: Bookdto.name }, })) != 0 ? true : false;
    
        if (exists) {
          throw new HttpException('Book Name already exists', 403);
        }
        this.bookRepository.save(Bookdto);
        return {
          message: 'Successfully created',
        };
      }   
      async findAllBook({ search, authorId, categoryId }: filter) {
        const repo = this.bookRepository.createQueryBuilder('book');
        let query = repo
          .leftJoinAndSelect('book.author', 'author')
          .leftJoinAndSelect('book.category', 'category')
          .select([
            'book.id',
            'book.name',
            'book.description',
            'author.name',
            'category.name',
          ])
         
          .andWhere('book.name ilike :searchText', { searchText: `%${search}%` });
          
        const filteredBooks = await query.getMany();
        if (filteredBooks.length === 0) {
          throw new HttpException('0 books found', HttpStatus.NOT_FOUND);
        }
        return filteredBooks;
      }
    }


