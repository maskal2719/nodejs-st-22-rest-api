/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Matches, Max, Min } from 'class-validator';
export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly login: string;

    @IsString()
    @Matches(/\d.+?[a-z]|[a-z].+?\d/i, {
        message: 'the password must consist of numbers and letters '
    })
    readonly password : string;

    @IsNumber()
    @Min(4)
    @Max(130)
    readonly age: number;
    
}