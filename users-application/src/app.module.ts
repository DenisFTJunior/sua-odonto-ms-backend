import { Module } from '@nestjs/common';
import { UsersModule } from './main/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
