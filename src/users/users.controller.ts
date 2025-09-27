import { Body, Controller, Get, Param, Post, Patch, Delete, Query } from '@nestjs/common';

export class User {
    id: number;
    name: string;
    document: string;
    about?: string;
    createdAt: string;
    updatedeAt?: string;
}

export class UserResponseDto extends User { }

export class CreateUserRequestDto {
    name: string;
    document: string;
}

export class PatchUserRequestDto {
    name?: string;
    document?: string;
}

@Controller('users')
export class UsersController {

    @Post()
    async createUser(
        @Body() body: CreateUserRequestDto
    ): Promise<UserResponseDto> {
        return {
            id: 1,
            name: body.name,
            document: body.document ?? '000.000.000-00',
            about: 'Creates a new user.',
            createdAt: new Date().toISOString(),
        };
    }

    @Get()
    async findAllUsers(
        @Query('name') name: string,
        @Query('document') document: string
    ): Promise<UserResponseDto> {
        return {
            id: 1,
            name: name ?? 'Hello World',
            document: document ?? '000.000.000-00',
            about: 'Finds all users that match the query.',
            createdAt: new Date().toISOString(),
        };
    }

    @Get(':id')
    async findUserById(
        @Param('id') id: number
    ) : Promise<UserResponseDto> {
        return {
            id,
            name: 'Hello World',
            document: '000.000.000-00',
            about: 'Finds a user by their ID.',
            createdAt: new Date().toISOString(),
        }
    }

    @Patch(':id')
    async patchUserById(
        @Param('id') id: number,
        @Body() body: PatchUserRequestDto
    ): Promise<UserResponseDto> {
        return {
            id,
            name: body.name ?? 'Hello World',
            document: body.document ?? '000.000.000-00',
            about: 'Updates a user\'s information with the given parameters.',
            createdAt: new Date().toISOString(),
            updatedeAt: new Date().toISOString(),
        };
    }

    @Delete(':id')
    async deleteUserById(
        @Param('id') id: number
    ): Promise<UserResponseDto> {
        return {
            id,
            name: 'Hello World',
            document: '000.000.000-00',
            about: 'Deletes a user.',
            createdAt: new Date().toISOString(),
        };
    }
}
