import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{ token: string }> {
    if (!email || !password)
      throw new HttpException('Missing data', HttpStatus.BAD_REQUEST);

    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    return { token };
  }
}
