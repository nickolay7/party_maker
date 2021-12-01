const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Entry, User } = require("../db/models/");

router
  .route('/')
  .get((req, res) => {
    if (req.session.user) {
      res.redirect('/personal');
    }
    res.render('login');
  })
  .post(async (req, res) => {
    const { name, password } = req.body;
    const userToLogin = await User.findOne({ where: { name } });
    const hash = await bcrypt.hash(password, userToLogin.pass);
    if (!hash) {
      return res.redirect('/log?error=not_found');
    }

    req.session.user = userToLogin.name;
    req.session.userId = userToLogin.id;
    return res.redirect('/personal');
  });

module.exports = router;
