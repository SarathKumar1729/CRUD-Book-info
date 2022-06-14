import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class author{
  
    @IsString()
    @IsNotEmpty()
    name:string;
}