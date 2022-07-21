/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    getAll(loginSubstring?: string | undefined, limit?: number) {
        console.log(loginSubstring);
        
        if (loginSubstring){
            return this.users.filter((user) => user.login === loginSubstring && !user.isDeleted);
        }
        
        if (limit){
            return this.users.slice(0,limit);
        }

        return this.users.filter(user => !user.isDeleted);
    }

    getOne(id: string) {
        return this.users.find(user => user.id === id && !user.isDeleted);
    }

    create(userDto: CreateUserDto) {
        if (this.isUnique(userDto.login)) {
            throw new BadRequestException('User with this login already exists');
        }
        const user = {id: uuidv4(), ...userDto, isDeleted : false};
        this.users.push(user);
        return user;
    }

    update(id: string, userDto: UpdateUserDto) {
        const user = this.getOne(id);
        
        const newUser = {
            ...user,
            ...userDto
        };

        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = newUser;
        return newUser;
    }

    remove(id: string) {
        return this.getOne(id).isDeleted = true;
    }

    isUnique(login: string) {
        return this.users.find((user) => user.login === login);
    }
    
}
