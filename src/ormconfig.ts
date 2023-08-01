import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/database.sqlite',
  // database: ':memory:',
  synchronize: true,
  dropSchema: true,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
};
