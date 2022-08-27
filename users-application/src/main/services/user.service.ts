import { Injectable } from '@nestjs/common';
import { User as PrismaUser } from '@prisma/client';
import { UserOrder as UserOrderType } from '../objects/args/UserOrder.args';
import { UserFilter } from '../objects/args/UserFilter.args';
import userSimpleFilterParser from './filters/userSimpleFilter.parser';
import userOrder from './order/user.order';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<PrismaUser> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<PrismaUser> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async find(params: {
    skip?: number;
    take?: number;
    userFilter?: UserFilter;
    order?: UserOrderType;
  }): Promise<PrismaUser[]> {
    const { skip, take, userFilter = {}, order } = params;
    const filter = userSimpleFilterParser(userFilter);
    const orderBy = userOrder(order);

    return this.prisma.user.findMany({
      skip,
      take,
      where: filter,
      orderBy,
    });
  }
}
