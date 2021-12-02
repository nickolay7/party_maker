const router = require('express').Router();
const { Event, User } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    // const organizer = await Event.findAll({where: {organizer: req.session.userid}})
    const member = await User.findOne({
      include: Event,
      where: { id: req.session.userid },
    });

    const memberEvents = member?.dataValues.Events;
    if (memberEvents.length !== 0) {
      res.render('userEditMain', { memberEvents });
    }

    res.render('userEditMain');
  })
  .post(async (req, res) => {
    // const {параметры человека} = req.body
    const user = await User.findOne({ where: { id: req.session.userid } });
    res.render('userEditMain', { user });
  });

module.exports = router;
