import {
  AutoIncrement,
  BeforeUpdate,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User as IUser } from '@app/common';

@Table({
  underscored: true,
  modelName: 'user',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class User extends Model implements IUser {
  @PrimaryKey
  @AutoIncrement
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

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @BeforeUpdate
  static setUpdatedAt(user: User) {
    user.updatedAt = new Date();
  }
}
