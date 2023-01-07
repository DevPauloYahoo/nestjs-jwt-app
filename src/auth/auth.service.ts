import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

import { UsersEntity } from '../app/users/users.entity';
import { UsersService } from '../app/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UsersEntity> {
    let user: UsersEntity;

    try {
      user = await this.usersService.findOneOrFair({ where: { email } });
    } catch (err) {
      console.log(err.message);
      return null;
    }

    if (!compareSync(password, user.password)) {
      return null;
    }

    return user;
  }

  createToken(user: UsersEntity) {
    const payload = { sub: user.id, email: user.email };
    return { access_token: this.jwtService.sign(payload) };
  }
}
