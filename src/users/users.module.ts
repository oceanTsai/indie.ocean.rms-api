import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/users.controller';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [],
    exports: [],
})
export class UsersModule { }
