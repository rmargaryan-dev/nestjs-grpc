import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizeConfig } from '@app/common';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    SequelizeModule.forRootAsync(getSequelizeConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AuthModule {}
