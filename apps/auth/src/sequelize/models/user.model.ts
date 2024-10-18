import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User as IUser } from '@app/common';

@Table
export class User extends Model implements IUser {
  @PrimaryKey
  @Column
  id: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  age: number;

  @Column
  subscribe: boolean;

  @Column
  twitterUri?: string;

  @Column
  facebookUri?: string;
}
