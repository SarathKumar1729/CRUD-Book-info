import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { author } from 'src/DTO/author.dto';
import { Author } from 'src/Entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
    
    constructor(
        @InjectRepository(Author)
        private authorRepository: Repository<Author>,
      ) {}
      async findAll() {
       
        const result = await this.authorRepository.find();
        return result;
      }
      async create(AuthorDto:author) {
        const exists =(await this.authorRepository.count({ where: { name: AuthorDto.name }, })) != 0 ? true : false;
    
        if (exists) {
          throw new HttpException('Book ID already exists', 403);
        }
        this.authorRepository.save(AuthorDto);
        return {
          message: 'Successfully created',
        };
      }   
     

}


