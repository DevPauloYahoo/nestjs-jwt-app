import { Controller, Post, Req, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthLocalGuard } from './guards/auth-local.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  @UseGuards(AuthLocalGuard)
  @Post('login')
  async login(@Req() req: any) {
    return this.authService.createToken(req.user);
  }
}
