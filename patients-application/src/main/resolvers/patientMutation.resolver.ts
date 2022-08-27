import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Patient } from '../entities/patient.entity';
import { CreatePatientInput } from '../objects/inputs/createPatient.input';
import { InsertPointsInput } from '../objects/inputs/insertPoints.input';
import { UpdatePatientInput } from '../objects/inputs/updatePatient.input';
import { PatientMutationService } from '../services/patientMutation.service';

//Conflit in type ROLE from prisma x graphql, for this used // @ts-ignore
@Resolver((of) => Patient)
export class PatientMutationResolver {
  constructor(private patientMutationService: PatientMutationService) {}

  @Mutation()
  async createPatient(@Args('input') input: CreatePatientInput) {
    return this.patientMutationService.createPatient(input);
  }

  @Mutation()
  async updatePatient(@Args('input') input: UpdatePatientInput) {
    const { id, ...data } = input;
    return this.patientMutationService.updatePatient({ id, data });
  }

  @Mutation()
  async insertPoints(@Args('input') input: InsertPointsInput) {
    const { id, points } = input;
    return this.patientMutationService.insertPoints({ id, points });
  }

  @Mutation()
  async deletePatient(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.patientMutationService.deletePatient(id);
  }
}
