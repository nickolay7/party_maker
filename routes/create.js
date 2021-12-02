const router = require('express').Router();


router
  .route('/')
  .get((req,res)=>{
    if (req.session.user) {
      res.render('createEvent')
    }
    res.redirect('/reg')
  });

module.exports = router;
