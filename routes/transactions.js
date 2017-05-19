var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Transaction.findAll({
    include:[ db.Car ],
    order: `"id" DESC`
  })
  .then ((transactions)=>{
    res.render('./transactions/index', {
      transactions: transactions
    })
  })
});


router.get('/add/:id', (req, res, next)=>{
  db.Car.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((car)=>{
    res.render('./transactions/add', {
      car: car
    })
  })
})

router.post('/add', (req, res, next)=>{
  db.Transaction.create({
    start_date: req.body.start_date,
    finish_date: req.body.finish_date,
    driver: req.body.driver,
    car_id: req.body.car_id
  })
  res.redirect('/transactions')
})


router.post('/update/:id', (req, res, next)=>{
  let param = req.params.id
  let transaction = {
    start_date: req.body.start_date,
    finish_date: req.body.finish_date,
    driver: req.body.driver,
    car_id: req.body.car_id
  }
  db.Transaction.update(transaction, {
    where: {
      id: param
    }
  })
  .then (()=>{
    res.redirect('/transactions')
  })
})

router.get('/edit/:id', (req, res, next)=>{
  let param = req.params.id
  db.Transaction.findById(param, {include:{model:db.Car}, order: `"id" DESC`})
  .then((transactions)=>{
    db.Car.findAll()
    .then((car)=>{
    res.render('./transactions/edit', {trans: transactions, car: car})
  })
  })
})

router.post('/delete/:id', (req, res, next)=>{
  let param = req.params.id
  db.Transaction.destroy({where: {
    id: param
  }})
  .then (()=>{
    res.redirect('/transactions')
  })
})


module.exports = router;
