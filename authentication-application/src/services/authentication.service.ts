import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login } from 'src/entities/login.entity';
import { LoginInput } from 'src/objects/input/login.input';

@Injectable()
export class AuthenticationService {
  constructor(private jwtService: JwtService) {}

  async login(input: LoginInput): Promise<Login> {
    const payload = { username: input.username };
    return {
      username: input.username,
      token: this.jwtService.sign(payload),
    };
  }

  async isValidToken(
    token: string,
  ): Promise<{ message: string; status: boolean }> {
    try {
      const status = this.jwtService.verify(token).username.length > 0;
      return { status, message: 'Validated token' };
    } catch (e) {
      return { message: e.message, status: false };
    }
  }
}
