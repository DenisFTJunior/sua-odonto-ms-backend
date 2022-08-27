import { Role } from '../enums/role.enum';

export class CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: Role;
}
