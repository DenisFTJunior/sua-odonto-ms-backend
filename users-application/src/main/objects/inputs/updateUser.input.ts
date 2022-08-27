import { Role } from '../enums/role.enum';

export class UpdateUserInput {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
}
