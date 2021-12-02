/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
const router = require('express').Router();
const { Event, User, Entry } = require('../db/models');

router.route('/:eventId').get(async (req, res) => {
  //! Работает не только в теории, но и на практике
  const user = await User.findOne({ where: { id: req.session.userid } });

  const event = await User.findAll({
    include: Event,
    where: { event_identifier: req.params.eventId },
  });

  const entry = await Entry.create({event_id: event.id, user_id: user.id})

  const interes_1 = event.dataValues.Users.filter((e) => {
    e.dataValue.interes_1 == user.interes_1
      || e.dataValue.interes_2 == user.interes_1
      || e.dataValue.interes_3 == user.interes_1;
  });
  const interes_2 = event.dataValues.Users.filter((e) => {
    e.dataValue.interes_1 == user.interes_2
      || e.dataValue.interes_2 == user.interes_2
      || e.dataValue.interes_3 == user.interes_2;
  });
  const interes_3 = event.dataValues.Users.filter((e) => {
    e.dataValue.interes_1 == user.interes_3
      || e.dataValue.interes_2 == user.interes_3
      || e.dataValue.interes_3 == user.interes_3;
  });
  res.render('event', {
    event,
    interes_1,
    interes_2,
    interes_3,
  });
});

module.exports = router;
/* req.session.userid */
/* req.params.eventId */

// async function test() {
//   // const user = await User.findOne({ where: { id: 1 } });
//   // console.log(user);
//   // eslint-disable-next-line no-trailing-spaces
//   const entry = await Entry.create({event_id: 2, user_id: 3})
//   const event = await Event.findOne({
//     include: User,
//     where: { event_identifier: 'Набор_цифр&букв' },
//   });
//   event.dataValues.Users.forEach(e => {
//     console.log(e.dataValues.name);
//   });
    

// }
// test();
