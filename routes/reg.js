const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    req.session.destroy();
    res.cookie('sid', '00', { expires: new Date() }) // серверное удаление куки по имени
    const { error } = req.query;
    res.render('reg', { error });
  })
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    const userToRegister = await User.findOne({ where: { name: name } });

    if (userToRegister) {
      return res.redirect('/reg?error=user_already_exists');
    }
    const hash = await bcrypt.hash(password, 10);
    const userToLogin = await User.create({ name, password: hash, email });

    req.session.user = userToLogin.name;
    req.session.userid = userToLogin.id;
    res.redirect('/reg/form');
  });
router
  .route('/form')
  .get((req, res) => {
    const { error } = req.query;
    res.render('profile', { error }); // глянуть название формы
  })
  .post(async (req, res) => {
    console.dir(req.body)
    const { interes_1, interes_2, interes_3, } = req.body; //
    await User.update({ interes_1, interes_2, interes_3}, {
      where: {
        id: req.session.userid,
      }
    });
    res.redirect('/personal');
  });

module.exports = router;
