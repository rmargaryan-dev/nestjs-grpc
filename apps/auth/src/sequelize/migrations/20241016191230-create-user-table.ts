// src/sequelize/seeders/{timestamp}-demo-users.ts
import { QueryInterface, DataTypes } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('user', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subscribe: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      twitterUri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebookUri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('user');
  },
};
