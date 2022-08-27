import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { PatientsResolver } from './resolvers/patients.resolver';
import { PatientMutationResolver } from './resolvers/patientMutation.resolver';
import { PatientService } from './services/patient.service';
import { PatientMutationService } from './services/patientMutation.service';

@Module({
  providers: [
    PatientsResolver,
    PatientService,
    PatientMutationResolver,
    PatientMutationService,
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


export class PatientsModule {}
