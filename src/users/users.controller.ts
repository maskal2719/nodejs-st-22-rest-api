/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './services/users.service';

@Controller('v1/users')
export class UsersController {

    constructor(private readonly usersService : UsersService) {

    }

    @Get()
    getAll() {
        return this.usersService.getAll()
    }

    @Get()
    getAutoSuggestUsers(@Query('loginSubstring') loginSubstring: string, @Query('limit') limit : number) {
        return limit
    }

    @Get(':id')
    getOne(@Param('id') id : string) {
        return this.usersService.getOne(id)
    }

    @Post()
    create(@Body() createUserDto : CreateUserDto) {
        return this.usersService.create(createUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id)
    }

    @Put(':id')
    update(@Body() updateUserDto : UpdateUserDto, @Param('id') id : string) {
        return this.usersService.update(id, updateUserDto)
    }


}
