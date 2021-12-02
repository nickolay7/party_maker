const router = require('express').Router();
const { Event, User } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    // if (req.session.user) {
      res.render('editEvent');
    // }
    // res.redirect('/reg');
  })
  .post(async (req, res) => {
    if (req.session.user) {
      res.render('createEvent');
    }
    res.redirect('/reg');
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
