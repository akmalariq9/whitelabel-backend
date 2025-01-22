'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Teknologi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Olahraga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hiburan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Politik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ekonomi',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
