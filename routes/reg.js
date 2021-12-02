const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    const { error } = req.query;
    res.render('reg', { error });
  })
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    const userToRegister = await User.findOne({ where: { name } });

    if (userToRegister) {
      return res.redirect('/reg?error=user_already_exists');
    }
    const hash = await bcrypt.hash(password, 10);
    const userToLogin = await User.create({ name, pass: hash, email });

    req.session.user = userToLogin.name;
    req.session.userid = userToLogin.id;
    res.redirect('/reg/form');
  });
router
  .route('/form')
  .get((req, res) => {
    const { error } = req.query;
    res.render('form', { error }); // глянуть название формы
  })
  .post(async (req, res) => {

   // const { name, password, email } = req.body; // 
    const userToRegister = await User.findOne({ where: { name: req.session.user } });

    res.redirect('/personal');
  });

module.exports = router;
