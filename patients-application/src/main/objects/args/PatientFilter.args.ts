import { Origin } from '../enums/Origin.enum';

export class PatientFilter {
  ids?: number[];
  names?: string[];
  emails?: string[];
  phones?: string[];
  points?: {
    bigger?: number;
    equal?: number;
    smaller?: number;
  };
  origins?: Origin[];
}
