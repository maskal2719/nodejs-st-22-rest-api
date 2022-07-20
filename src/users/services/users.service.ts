/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    getAll() {
        return this.users.filter(user => user.isDeleted === false);
    }

    getOne(id: string) {
        return this.users.find(user => user.id === id && user.isDeleted === false);
    }

    create(userDto: CreateUserDto) {
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
    
}
