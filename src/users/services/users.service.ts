/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async getOne(id: string) {
        const user = await this.userRepository.findOne({where : {id, isDeleted: false}})
        return user;
    }

    async remove(id: string) {
        return await this.userRepository.update({isDeleted: true }, { where: { id }, returning: true});
      }

    async update(id: string, userDto: UpdateUserDto) {
        const newUser = await this.userRepository.update(userDto, {where: { id }, returning: true});
        return newUser;
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({where: {isDeleted: false}})
        return users;
    }
}
