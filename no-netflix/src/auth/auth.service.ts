import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
   
    if (email === 'admin@netflix.com' && password === '123456') {
      return {
        message: 'Login exitoso',
        token: 'fake-jwt-token-rick-morty-2026',
        user: { email, name: 'Rick Sanchez' },
      };
    }
    throw new UnauthorizedException('Credenciales incorrectas');
  }
}