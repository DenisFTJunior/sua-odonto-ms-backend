import {
  Args,
  Mutation,
  Resolver,
  ResolveReference,
  Query,
} from '@nestjs/graphql';
import { Login } from '../entities/login.entity';
import { LoginInput } from '../objects/input/login.input';
import { AuthenticationService } from '../services/authentication.service';

//Conflit in type ROLE from prisma x graphql, for this used // @ts-ignore
@Resolver((of) => Login)
export class AuthenticationResolver {
  constructor(private authenticationService: AuthenticationService) {}

  @Mutation()
  async login(@Args('input') input: LoginInput) {
    return this.authenticationService.login(input);
  }

  @Query()
  async isValidToken(@Args('token') token: string) {
    return this.authenticationService.isValidToken(token);
  }
}
