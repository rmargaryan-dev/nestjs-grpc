import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizeConfig } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { User } from './sequelize/models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env',
    }),
    SequelizeModule.forRootAsync(getSequelizeConfig([User])),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AuthModule {}
