import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class filter{
    @IsString()
    @IsNotEmpty()
    search:string;
    @IsNumber()
    @IsNotEmpty()
    authorId:number;
    @IsNumber()
    @IsEmpty()
    categoryId:number;
}