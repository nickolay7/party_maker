const router = require('express').Router();
const { Event, User } = require("../db/models/");

router
  .route('/')
  .get(async(req,res)=>{
    const user = await User.findOne({where:{id: req.session.userId}})
    res.render('worksheet', {user})
  .post((req,res)=>{
res.redirect('/reg/form')
  });

  router
  .route('/event')
  .get(async(req,res)=>{
    const member = await Event.findAll( {include: User}) // посмотреть как правильно искать в БД
    const organizer = await Event.findAll( {include: User, where: {organizer: req.session.userid}}) // посмотреть как правильно искать в БД
    const user = await User.findOne({where:{id: req.session.userId}})
    res.render('personalEvent', {user, member, organizer})
  });  
module.exports = router;
  

