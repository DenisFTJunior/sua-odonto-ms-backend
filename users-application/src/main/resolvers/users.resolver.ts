import { Args, Int, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from 'src/main/entities/user.entity';
import { UserFilter } from '../objects/args/UserFilter.args';
import { UserOrder } from '../objects/args/UserOrder.args';
import { UserService } from '../services/user.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User, { name: 'user' })
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findById(id);
  }

  @Query((returns) => [User], { name: 'users' })
  async getUsers(
    @Args('filter', { nullable: true }) userFilter: UserFilter = {},
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('order', { type: () => Int, nullable: true }) order: UserOrder,
  ) {
    return this.userService.find({ userFilter, take, skip, order });
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.userService.findById(reference.id);
  }
}
