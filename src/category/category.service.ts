import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { author } from 'src/DTO/author.dto';
import { category } from 'src/DTO/category.dto';

import { Category } from 'src/Entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
      ) {}
      async findAll() {
       
        const result = await this.categoryRepository.find();
        return result;
      }
      async create(CategoryDto:category) {
        const exists =(await this.categoryRepository.count({ where: { name: CategoryDto.name }, })) != 0 ? true : false;
    
        if (exists) {
          throw new HttpException('Book ID already exists', 403);
        }
        this.categoryRepository.save(CategoryDto);
        return {
          message: 'Successfully created',
        };
      }   

}
