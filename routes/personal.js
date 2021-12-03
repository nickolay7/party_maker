const router = require('express').Router();
const { Entry, Event, User } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    let organizer;
    try {
      organizer = await Event.findAll({
        where: { organizer: String(req.session.userid) },
      });
    } catch (e) {
      console.log(e.message);
    }

    const member = await User.findOne({
      include: Event,
      where: { id: req.session.userid },
    });

    const memberEvents = member.dataValues.Events;
    // console.log("тут событие организатора", organizer);

    if (organizer.length !== 0) {
      if (memberEvents.length !== 0) {
        return res.render('userEditMain', { memberEvents, organizer });
      }
      return res.render('userEditMain', { organizer });
    }

    if (memberEvents.length !== 0) {
      if (organizer.length !== 0) {
        return res.render('userEditMain', { memberEvents, organizer });
      }
      return res.render('userEditMain', { memberEvents });
    }

    res.render('userEditMain');
  })
  .post(async (req, res) => {
    // const {параметры человека} = req.body
    const user = await User.findOne({ where: { id: req.session.userid } });
    res.render('userEditMain', { user });
  });

router.route('/del/:uniq').get(async (req, res) => {
  console.log(req.params.uniq);
  await Event.destroy({ where: { event_identifier: req.params.uniq } });
  res.redirect('/personal');
});
router.route('/await/:uniq').get(async (req, res) => {
  console.log(req.params.uniq);
const event = await Event.findOne({ where: { event_identifier: req.params.uniq } });
await Entry.destroy({where:{event_id: event.id}})
  res.redirect('/personal');
});

module.exports = router;
