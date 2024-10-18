import { SequelizeModuleAsyncOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';

export function getSequelizeConfig(): SequelizeModuleAsyncOptions {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      uri: configService.get('DATABASE_URI'),
      dialect: 'postgres',
    }),
  };
}
