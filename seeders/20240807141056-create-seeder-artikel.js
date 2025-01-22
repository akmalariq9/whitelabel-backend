const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM users`, 
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Step 2: Masukkan artikel dengan userId dari hasil query di atas
    // await queryInterface.bulkInsert('artikels', [
    //   {
    //     id: uuidv4(),
    //     title: 'Artikel 1',
    //     content: 'Content 1',
    //     userId: users[Math.floor(Math.random() * users.length)].id,  // Pilih userId acak dari tabel users
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('artikels', null, {});
  }
};
