import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthenticationResolver } from './resolvers/authentication.resolver';
import { AuthenticationService } from './services/authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './constants/jwt.constants';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['src/entities/*.graphql'],
      context: ({ req, res }) => ({ req, res }),
      definitions: {
        emitTypenameField: true,
      },
    }),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthenticationResolver, AuthenticationService],
})
export class AppModule {}
