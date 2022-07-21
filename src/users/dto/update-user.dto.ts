/* eslint-disable prettier/prettier */
import { IsDefined, IsNotEmpty, IsNumber, IsString, Matches, Max, Min } from 'class-validator';
export class UpdateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly login: string;
    
    @IsDefined()
    @IsString()
    @Matches(/\d.+?[a-z]|[a-z].+?\d/i, {
        message: 'the password must consist of numbers and letters '
    })
    readonly password: string;

    @IsDefined()
    @IsNumber()
    @Min(4)
    @Max(130)
    readonly age: number;
}