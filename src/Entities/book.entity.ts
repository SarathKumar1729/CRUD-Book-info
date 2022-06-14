import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './author.entity';
import { Category } from './category.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  description: string;
  
 
  @ManyToOne(() => Category,{eager:true})
  @JoinColumn([{name:'category',referencedColumnName:'id'}])
  category: number;
 
  @ManyToOne(() => Author,{eager:true})
  @JoinColumn([{name:'author',referencedColumnName:'id'}])
  author: number;
}
