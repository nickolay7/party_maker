const router = require('express').Router();
const { Event, User } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    res.render('editEvent');
  })
  .post(async (req, res) => {
    const randomaze = () => {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };
    const random = randomaze();
    const { title, event_date, location } = req.body;
    const event = await Event.create({
      title,
      organizer: req.session.userid,
      event_date,
      location,
      event_identifier: random,
    });

    res.redirect('/personal');
  });

module.exports = router;
/*
 ## tableName
profileQuestionare

## Fields
{{interests.myProp}} ##свойство объекта интереса.
{{doYouSmoke}}
{{doYouDrink}}
{{wannaChat}}
{{nightGoal.property}}
{{linkSocialHtml}}
*/
