import { Injectable } from '@nestjs/common';
import { Patient as PrismaPatient } from '@prisma/client';
import { PatientOrder as PatientOrderType } from '../objects/args/PatientOrder.args';
import { PatientFilter } from '../objects/args/PatientFilter.args';
import patientSimpleFilterParser from './filters/patientSimpleFilter.parser';
import userOrder from './order/patients.order';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<PrismaPatient> {
    return this.prisma.patient.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<PrismaPatient> {
    return this.prisma.patient.findUnique({
      where: {
        email,
      },
    });
  }

  async find(params: {
    skip?: number;
    take?: number;
    patientFilter?: PatientFilter;
    order?: PatientOrderType;
  }): Promise<PrismaPatient[]> {
    const { skip, take, patientFilter = {}, order } = params;
    const filter = patientSimpleFilterParser(patientFilter);
    const orderBy = userOrder(order);

    return this.prisma.patient.findMany({
      skip,
      take,
      where: filter,
      orderBy,
    });
  }
}
