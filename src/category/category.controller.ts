import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { category } from 'src/DTO/category.dto';

import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
   
        constructor(private readonly categoryService: CategoryService) {}
        @Post('/createCategory')
        create(@Body(ValidationPipe)category:category){
            return this.categoryService.create(category)
        }
        @Get('/createCategory')
        findAll(){
            return this.categoryService.findAll() 
        }
       
}

