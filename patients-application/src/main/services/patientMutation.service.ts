import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Patient as PrismaPatient } from '@prisma/client';

@Injectable()
export class PatientMutationService {
  constructor(private prisma: PrismaService) {}

  async createPatient(data: Prisma.PatientCreateInput): Promise<PrismaPatient> {
    return this.prisma.patient.create({
      data,
    });
  }

  async updatePatient(params: {
    id: number;
    data: Prisma.PatientUpdateInput;
  }): Promise<PrismaPatient> {
    const { id, data } = params;
    return this.prisma.patient.update({
      data,
      where: {
        id,
      },
    });
  }

  async insertPoints(params: {
    id: number;
    points: number;
  }): Promise<PrismaPatient> {
    const { id, points } = params;
    return this.prisma.patient.update({
      data: {
        points,
      },
      where: {
        id,
      },
    });
  }

  async deletePatient(id: number): Promise<PrismaPatient> {
    return this.prisma.patient.delete({
      where: {
        id,
      },
    });
  }
}
