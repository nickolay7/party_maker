const router = require('express').Router();
const { Event, User } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const user = await User.findOne({include: Event, where: { id: req.session.userid } });
    const memberEvents = user.dataValues.Events;
    // const organizer = await Event.findAll({where: {organizer: req.session.userid}})
console.log(memberEvents[0].dataValues.title);
    res.render('userEditMain', { memberEvents });
  })
  .post(async (req, res) => {
    // const {параметры человека} = req.body
    const user = await User.findOne({ where: { id: req.session.userid } });
    res.render('userEditMain', { user });
  });

module.exports = router;
