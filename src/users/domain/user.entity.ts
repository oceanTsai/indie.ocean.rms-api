import { Role } from '@prisma/client';

export class User {
  id: string;
  email: string;
  name: string | null;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}
