import { Args, Int, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { Patient } from 'src/main/entities/patient.entity';
import { PatientFilter } from '../objects/args/PatientFilter.args';
import { PatientOrder } from '../objects/args/PatientOrder.args';
import { PatientService } from '../services/patient.service';

@Resolver((of) => Patient)
export class PatientsResolver {
  constructor(private patientService: PatientService) {}

  @Query((returns) => Patient, { name: 'patient' })
  async getPatient(@Args('id', { type: () => Int }) id: number) {
    return this.patientService.findById(id);
  }

  @Query((returns) => [Patient], { name: 'patients' })
  async getPatients(
    @Args('filter', { nullable: true }) patientFilter: PatientFilter = {},
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('order', { type: () => Int, nullable: true }) order: PatientOrder,
  ) {
    return this.patientService.find({ patientFilter, take, skip, order });
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.patientService.findById(reference.id);
  }
}
