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
   // Seed data
    await queryInterface.bulkInsert('artikels', [
      {
        title: 'Artikel 1',
        content: 'Content 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Artikel 2',
        content: 'Content 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Artikel 3',
        content: 'Content 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
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
