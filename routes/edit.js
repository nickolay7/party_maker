const router = require('express').Router();
const { Event, User } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    if (req.session.user) {
      res.render('createEvent');
    }
    res.redirect('/reg');
  })
  .post(async (req, res) => {
    if (req.session.user) {
      res.render('createEvent');
    }
    res.redirect('/reg');
  }); // редактирование мероприятия

module.exports = router;
