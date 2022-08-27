import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User as PrismaUser } from '@prisma/client';

@Injectable()
export class UserMutationService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<PrismaUser> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    id: number;
    data: Prisma.UserUpdateInput;
  }): Promise<PrismaUser> {
    const { id, data } = params;
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteUser(id: number): Promise<PrismaUser> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
