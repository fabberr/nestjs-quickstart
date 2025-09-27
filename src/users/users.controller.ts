import { Body, Controller, Get, Param, Post, Patch, Delete, Query } from '@nestjs/common';

type User = {
    id: number;
    name: string;
    document: string;
    about?: string;
    createdAt: string;
    updatedeAt?: string;
};

type UserResponse = User;

type CreateUserRequest = {
    name: string;
    document: string;
};

type PatchUserRequest = {
    name?: string;
    document?: string;
};

@Controller('users')
export class UsersController {

    @Post()
    createUser(
        @Body() body: CreateUserRequest
    ): UserResponse {
        return {
            id: 1,
            name: body.name,
            document: body.document ?? '000.000.000-00',
            about: 'Creates a new user.',
            createdAt: new Date().toISOString(),
        };
    }

    @Get()
    findAllUsers(
        @Query('name') name: string,
        @Query('document') document: string
    ): UserResponse {
        return {
            id: 1,
            name: name ?? 'Hello World',
            document: document ?? '000.000.000-00',
            about: 'Finds all users that match the query.',
            createdAt: new Date().toISOString(),
        };
    }

    @Get(':id')
    findUserById(@Param('id') id: number) : UserResponse {
        return {
            id,
            name: 'Hello World',
            document: '000.000.000-00',
            about: 'Finds a user by their ID.',
            createdAt: new Date().toISOString(),
        }
    }

    @Patch(':id')
    patchUserById(
        @Param('id') id: number,
        @Body() body: PatchUserRequest
    ): UserResponse {
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
    deleteUserById(@Param('id') id: number): UserResponse {
        return {
            id,
            name: 'Hello World',
            document: '000.000.000-00',
            about: 'Deletes a user.',
            createdAt: new Date().toISOString(),
        };
    }
}
