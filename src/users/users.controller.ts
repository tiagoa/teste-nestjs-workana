import {
  Controller,
  Get,
  Post,
  Body,
  Render,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('register')
  @Render('users/register')
  showRegister() {
    return { title: 'Cadastro' };
  }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto, @Res() res) {
    const user = await this.usersService.create(createUserDto);
    return res.status(HttpStatus.CREATED).json(user);
  }

  @Get()
  @Render('users/index')
  getIndex() {
    return { title: 'Home' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('home')
  @Render('users/home')
  async showHome() {
    const users = await this.usersService.findAll();
    return { users };
  }
}
