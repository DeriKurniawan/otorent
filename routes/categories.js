"use strict"

const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res, next)=>{
  models.Category.findAll()
  .then((cats)=>{
    res.render('/categories/index', {
      result: cats
    })
  })
})

router.get('/add', (req,res,next)=>{
  models.Category.findAll()
  .then((cats)=>{
    res.render('/categories/add', {
      cats: cats
    })
  })
})

router.post('/create', (req,res,next)=>{
  models.Category.create({
    categories: req.body.category
  })
  .then((cats)=>{
    res.redirect('/categories')
  })
})

router.get('/edit/:id', (req,res,next)=>{
  models.Category.find({
    where: {
      id: req.params.id
    }
  })
  .then((cats)=>{
    res.render('/categories/edit', {
      cats: cats
    })
  })
})

router.post('/update/:id', {
  models.Category.find({
    where: {
      id: req.params.id
    }
  })
  .then((cats)=>{
    cats.updateAttributes({
      category: req.body.category
    })
    .then(()=> {
      res.redirect('/categories')
    })
  })
})

router.get('/delete/:id', (req,res,next)=>{
  models.Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((cats)=>{
    res.redirect('/categories')
  })
})

module.exports = router
