const router = require('express').Router();
const {Entry, User} = require("../db/models/");

router
  .route('/')
  .get(async (req, res) => {
    const user = await User.findOne({where: {id: req.session.userid}})
    res.render('userEditMain', {user})
  })
  .post(async (req, res) => {
    // const {параметры человека} = req.body
    const user = await User.findOne({where: {id: req.session.userid}})
    res.render('userEditMain', {user})
  });

module.exports = router;
