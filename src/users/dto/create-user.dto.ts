/* eslint-disable prettier/prettier */
import { IsDefined, IsNumber, IsString, Matches, Max, Min } from 'class-validator';
export class CreateUserDto {

    @IsDefined()
    @IsString()
    readonly login: string;

    @IsDefined()
    @IsString()
    @Matches(/\d.+?[a-z]|[a-z].+?\d/i, {
        message: 'the password must consist of numbers and letters '
    })
    readonly password : string;

    @IsDefined()
    @IsNumber()
    @Min(4)
    @Max(130)
    readonly age: number;
    
}