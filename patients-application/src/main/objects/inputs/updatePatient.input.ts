import { Origin } from '../enums/Origin.enum';

export class UpdatePatientInput {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  origin?: Origin;
}
