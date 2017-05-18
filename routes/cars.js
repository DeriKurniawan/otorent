"use strict"
const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res, next)=> {
  models.Car.findAll({
    include: [models.Category],
    order: ` "id" Desc`
  })
  .then((cars)=> {
    console.log(JSON.stringify(cars));
    res.render('cars/index', {
      result: cars
    })
  })
})

router.get('/add', (req, res, next)=>{
  let category = models.Category
  category.findAll()
  .then((categories)=>{
    res.render('cars/add', {
      categories: categories
    })
  })
})

router.post('/create', (req, res, next)=> {
  let body = req.body;
  models.Car.create({
    name: body.name,
    manufacture: body.manufacture,
    color: body.color,
    status: body.status,
    description: body.description,
    image: body.image,
    category_id: body.category_id
  })
  .then((cars)=>{
    res.redirect('/cars')
  })
})

router.get('/edit/:id', (req, res, next)=>{
  models.Car.find({
    include: [models.Category],
    where: {
      id: req.params.id
    }
  })
  .then((cars)=>{
    models.Category.findAll()
    .then((category)=>{
      res.render('cars/edit', {
        cars: cars,
        categories: catogery
      })
    })
  })
})

router.post('/update/:id', (req, res, next)=>{
  models.Car.find({
    where: {
      id: req.params.id
    }
  })
  .then((cars)=>{
    let body = req.body;
    cars.updateAttributes({
      name: body.name,
      manufacture: body.manufacture,
      color: body.color,
      status: body.status,
      description: body.description,
      image: body.image,
      category_id: body.category_id
    })
    .then(()=>{
      res.redirect('/cars')
    })
  })
})

router.get('/delete/:id', (req, res, next)=>{
  models.Car.destroy({
    where:{
      id: req.params.id
    }
  })
  .then((cars)=>{
    res.redirect('/cars')
  })
})

module.exports = router
