import { IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class book{

    @IsString()
    @IsNotEmpty()
    name:string;
    @IsString()
    @IsNotEmpty()
    description:string;
    @IsNumber()
    @IsNotEmpty()
    category:number;
    @IsNumber()
    @IsNotEmpty()
    author:number;
}