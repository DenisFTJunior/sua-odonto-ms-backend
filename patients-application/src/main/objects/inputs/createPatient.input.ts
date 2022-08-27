import { Origin } from '../enums/Origin.enum';

export class CreatePatientInput {
  name: string;
  email: string;
  phone: string;
  password: string;
  origin: Origin;
}
