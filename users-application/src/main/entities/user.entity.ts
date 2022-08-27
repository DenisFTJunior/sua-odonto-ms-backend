import { Role } from 'src/main/objects/enums/role.enum';

export class User {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
}
