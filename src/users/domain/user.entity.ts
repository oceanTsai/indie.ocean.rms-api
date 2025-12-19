import { Role } from '@prisma/client';

export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly roles: Role[],
    public readonly name?: string | null,
    public readonly password?: string, // Hashed
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}
