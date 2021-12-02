const router = require('express').Router();
const { Event, User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    if (req.session.user) {
      res.render('createEvent');
    }
    res.redirect('/reg');
  })
  .post((req, res) => {
    if (req.session.user) {
      res.render('createEvent');
    }
    res.redirect('/reg');
  });

module.exports = router;

