import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { Author } from 'src/Entities/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorService],
  exports: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
