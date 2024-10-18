// src/sequelize/config.ts

import { Dialect } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

interface ISequelizeConfig {
  [key: string]: {
    dialect: Dialect;
    url: string;
  };
}

const config: ISequelizeConfig = {
  development: {
    dialect: 'postgres',
    url: process.env.DATABASE_URI,
  },
  test: {
    dialect: 'postgres',
    url: process.env.DATABASE_URI,
  },
  production: {
    dialect: 'postgres',
    url: process.env.DATABASE_URI,
  },
};

export = config;
