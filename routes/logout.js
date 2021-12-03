const router = require('express').Router();

router
  .route('/')
  .get((req, res) => {
    req.session.destroy();
    res
      .cookie('sid', '00', { expires: new Date() }) // серверное удаление куки по имени
      .redirect('/');
  });

module.exports = router;
