import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersResolver } from './resolvers/users.resolver';
import { UserMutationResolver } from './resolvers/usersMutation.resolver';
import { UserService } from './services/user.service';
import { UserMutationService } from './services/userMutation.service';

@Module({
  providers: [
    UsersResolver,
    UserService,
    UserMutationResolver,
    UserMutationService,
    PrismaService,
  ],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['src/main/entities/*.graphql'],
      context: ({ req, res }) => ({ req, res }),
      definitions: {
        emitTypenameField: true,
      },
    }),
  ],
})


export class UsersModule {}
