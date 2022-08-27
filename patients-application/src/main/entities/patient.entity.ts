import { Origin } from 'src/main/objects/enums/Origin.enum';

export class Patient {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  points?: number;
  origin?: Origin;
}
