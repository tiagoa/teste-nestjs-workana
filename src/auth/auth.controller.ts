import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Get,
  Render,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Render('auth/login')
  showLogin() {
    return { title: 'Login' };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res) {
    const token = await this.authService.login(loginDto);
    if (token) {
      return res.status(HttpStatus.OK).json(token);
    } else {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid credentials' });
    }
  }

  @Get('forgot-password')
  @Render('auth/forgot-password')
  getForgotPassword() {
    return { title: 'Esqueci minha senha' };
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  async resetPassword(
    @Query('token') token: string,
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    return this.authService.resetPassword(token, resetPasswordDto.password);
  }

  @Get('reset-password')
  @Render('auth/reset-password')
  showResetPassword(@Query('token') token: string) {
    return { title: 'Nova senha', token };
  }
}
