import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class category{
  
    @IsString()
    @IsNotEmpty()
    name:string;
}