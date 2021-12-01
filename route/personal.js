const router = require('express').Router();
const { Entry, User } = require("../db/models/");

router
  .route('/')
  .get((req,res)=>{
    const user = await User.findOne({where:{id: req.session.userId}})
    res.render('worksheet', {user})
  .post((req,res)=>{
    const {параметры человека} = req.body
    const user = await User.findOne({where:{id: req.session.userId}})
    res.render('worksheet', {user})
  });

module.exports = router;
