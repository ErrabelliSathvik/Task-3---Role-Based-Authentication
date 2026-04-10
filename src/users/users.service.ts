import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any[] = [];  // ⭐ FIXED TYPE (prevents 'never' errors)

  addUser(user: any) {
    this.users.push(user);
  }

  findByEmail(email: string) {
    return this.users.find((u: any) => u.email === email);
  }
}