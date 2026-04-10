import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    const authHeader = req.headers['authorization'];

    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, 'SECRET_KEY');
      req.user = decoded;
      return true;
    } catch (err) {
      return false;
    }
  }
}