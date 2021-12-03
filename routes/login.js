const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    if (req.session.user) {
      return res.redirect('/personal');
    }
    res.render('login');
  })
  .post(async (req, res) => {
    const { name, password } = req.body;
    const userToLogin = await User.findOne({ where: { name } });
    const hash = await bcrypt.compare(password, userToLogin.password);
    if (!hash) {
      return res.redirect('/log?error=not_found');
    }

    req.session.user = userToLogin.name;
    req.session.userid = userToLogin.id;
    return res.redirect('/personal');
  });

module.exports = router;
