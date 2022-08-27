import { Module } from '@nestjs/common';
import { PatientsModule } from './main/patient.module';

@Module({
  imports: [PatientsModule],
})
export class AppModule {}
