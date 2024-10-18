// src/sequelize/seeders/{timestamp}-demo-users.ts
import sequelize, { QueryInterface, DataTypes } from 'sequelize';

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
      twitter_uri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebook_uri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('user');
  },
};
