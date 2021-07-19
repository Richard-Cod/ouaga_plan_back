import { PlanValidator } from './../../clean/core/contracts/PlanValidator';
import { PlansRepository } from './../../clean/core/contracts/PlansRepository';
import express from 'express'

export default (repo : PlansRepository , planValidator : PlanValidator) => {

const router = express.Router()


router.get('/', function(req, res) {
    try {
       res.send(repo.getAll())
    } catch (e) {
      res.send({e : e.message})
    }
  });


  router.post('/', function(req, res) {
    try {
      const result = planValidator.validateForCreation(req.body)
      if(!result.state) res.send({error : result.message})

       res.send(repo.createPlan(req.body))
    } catch (e) {
      console.log(e)
      res.send({e : e.message})
    }
  });


  router.get('/:id', function(req, res) {
    try {
        const id = req.params.id
        console.log(id)
        console.log(repo.getPlan(id))
       res.send(repo.getPlan(id))
    } catch (e) {
      console.log(e)
      res.send({e : e.message})

    }
  });

  router.put('/:id', function(req, res) {
    try {
        const id = req.params.id
       res.send(repo.update(id , req.body))
    } catch (e) {
      console.log(e)
      res.send({error : e.message})

    }
  });

  router.delete('/:id', function(req, res) {
    try {
        const id = req.params.id
       res.send(repo.delete(id))
    } catch (e) {
      console.log(e)
      res.send({error : e.message})
    }
  });

  return router
} 