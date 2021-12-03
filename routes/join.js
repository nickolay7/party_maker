/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
const router = require('express').Router();
const { Event, User, Entry } = require('../db/models');

router.route('/:eventId').get(async (req, res) => {

  const user = await User.findOne({ where: { id: req.session.userid } });

  const event = await Event.findOne({
    include: User,
    where: { event_identifier: req.params.eventId },
  });

  const entry = await Entry.findOrCreate({
    where: { event_id: event.id, user_id: user.id },
    defaults: {
      event_id: event.id,
      user_id: user.id,
    },
  });

  const interes_1 = event.Users.filter(
    (e) => e.dataValues.name != user.dataValues.name && (e.dataValues.interes_1 == user.dataValues.interes_1
      || e.dataValues.interes_2 == user.dataValues.interes_1
      || e.dataValues.interes_3 == user.dataValues.interes_1)
  );

  const interes_2 = event.Users.filter(
    (e) => e.dataValues.name != user.dataValues.name && (e.dataValues.interes_1 == user.dataValues.interes_2
      || e.dataValues.interes_2 == user.dataValues.interes_2
      || e.dataValues.interes_3 == user.dataValues.interes_2)
  );

  const interes_3 = event.Users.filter(
    (e) => e.dataValues.name != user.dataValues.name && (e.dataValues.interes_1 == user.dataValues.interes_3
      || e.dataValues.interes_2 == user.dataValues.interes_3
      || e.dataValues.interes_3 == user.dataValues.interes_3)
  );
  res.render('ifLogin', {
    user,
    event,
    interes_1,
    interes_2,
    interes_3,
  });
});

router.route('/').post((req, res) => {
  console.log(req.body);
  const { title } = req.body;
  res.redirect(`/join/${title}`);
});

module.exports = router;

