import { Role } from '../enums/role.enum';

export class UserFilter {
  ids?: number[];
  names?: string[];
  emails?: string[];
  roles?: Role[];
}
