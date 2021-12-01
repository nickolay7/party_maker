'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
        name: "Вася",
        email: "Gumbo b",
        password: "123",
        interes_1: "Gumbo b",
        interes_2: "Gumbo b",
        interes_3: "Gumbo b",
        drink: true,
        one_night: true,
        relationship: true,
        find_friends: true,
        social_networks: "@@@@@",
        communication: true,
        smoking:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
      {
        name: "Петя",
        email: "я@собака",
        password: "123",
        interes_1: "G",
        interes_2: "M",
        interes_3: "Gumbo b",
        drink: true,
        one_night: true,
        relationship: true,
        find_friends: true,
        social_networks: "я@собака",
        communication: true,
        smoking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});

      await queryInterface.bulkInsert('Events', [
        {
          title: "Похороны",
          organizer: 1,
          event_date: new Date(),
          location: "Место",
          event_identifier: "Набор_цифр&букв",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
       
        {
          title: "Свадьба",
          organizer: 2,
          event_date: new Date(),
          location: "Место",
          event_identifier: "123qwerty",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Events', null, {restartIdentity:true, truncate:true});
    await queryInterface.bulkDelete('Users', null, {restartIdentity:true, truncate:true});
  }
};
