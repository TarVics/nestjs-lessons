import {
  ApiBadRequestResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';
import { User } from './user.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAll();
  }

  @ApiBadRequestResponse({ status: 400, description: 'Bad query param' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @ApiQuery({ name: 'id', example: '1sfd-24f1234' })
  @Get('/:id')
  getOneUserById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Put('/:id')
  updateUser() {}

  @Delete('/:id')
  deleteUser() {}
}
