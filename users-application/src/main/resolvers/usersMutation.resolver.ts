import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { encrypter, decrypter } from '../../shared/helpers/encrypt.helper';
import { User } from '../entities/user.entity';
import { CreateUserInput } from '../objects/inputs/createUser.input';
import { UpdateUserInput } from '../objects/inputs/updateUser.input';
import { UserService } from '../services/user.service';
import { UserMutationService } from '../services/userMutation.service';

//Conflit in type ROLE from prisma x graphql, for this used // @ts-ignore
@Resolver((of) => User)
export class UserMutationResolver {
  constructor(
    private userMutationService: UserMutationService,
    private userService: UserService,
  ) {}

  @Mutation()
  async createUser(@Args('input') input: CreateUserInput) {
    const encryptedPassword = encrypter(input.password);

    // @ts-ignore
    return this.userMutationService.createUser({
      ...input,
      password: encryptedPassword,
    });
  }

  @Mutation()
  async updateUser(@Args('input') input: UpdateUserInput) {
    const { id, ...data } = input;
    // @ts-ignore
    return this.userMutationService.updateUser({ id, data });
  }

  @Mutation()
  async changePassword(
    @Args('input')
    input: {
      userId: string;
      password: string;
      newPassword: string;
    },
  ) {
    const { userId, password, newPassword } = input;
    const id = parseInt(userId);
    const user = await this.userService.findById(id);
    const decryptedActualPassword = await (
      await decrypter(user.password)
    ).toString();
    
    if (password !== decryptedActualPassword)
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Actual password dont match',
        },
        HttpStatus.FORBIDDEN,
      );

    const encryptedPassword = encrypter(newPassword);

    // @ts-ignore
    return this.userMutationService.updateUser({
      id,
      data: { password: encryptedPassword },
    });
  }

  @Mutation()
  async deleteUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userMutationService.deleteUser(id);
  }
}
