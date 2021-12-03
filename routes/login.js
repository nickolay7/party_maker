const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    const { error } = req.query;
    if (req.session.user) {
      return res.redirect('/personal');
    }
    res.render('login', { error });
  })
  .post(async (req, res) => {
    const { name, password } = req.body;
    const userToLogin = await User.findOne({ where: { name } });
    if (!userToLogin) {
      res.redirect('/login?error=user_not_found');
    }
    const hash = await bcrypt.compare(password, userToLogin.password);
    if (!hash) {
      return res.redirect('/login?error=wrong_password');
    }

    req.session.user = userToLogin.name;
    req.session.userid = userToLogin.id;
    return res.redirect('/personal');
  });

module.exports = router;
