const express = require('express');
const Cards = require('../db/models/Cards');
const router = express.Router();


router.route('/')
.post((req,res)=>{
  console.log(req.body);
  let {title,priority,created_by,assigned_to} = req.body;
  let status = 'Queue';
  return new Cards({title,priority,status,created_by,assigned_to})
  .save()
  .then(result=>{
    res.json({message:'success'})
  })
  .catch(err=>{
    res.json({message:err})
  })
})
.get((req,res)=>{
  return Cards
  .fetchAll()
  .then(result=>{
    return res.json(result)
  })
})



router.route('/:id')

.get((req,res)=>{
  console.log(req.params.id)
  return new Cards()
  .where({id:req.params.id})
  .fetch()
  .then(result=>{
    if(!result){
      res.send('Card Does Not Exist')

    }
    return res.json(result.attributes);
  })
  .catch(err=>{
    res.send('Card Does Not Exist')
  })
})
.put((req,res)=>{
  Cards.forge({id:req.params.id})
  .fetch({require:true})
  .then(result=>{
    result.save({
      title: req.body.title,
      priority: req.body.priority,
      status:req.body.status,
      assigned_to:req.body.assigned_to 
    })
    .then(result=>{
      res.send('success')
    })
  }) 
})
.delete((req,res)=>{
  Cards.forge({id:req.params.id})
  .fetch({require:true})
  .then(result=>{
    result.destroy()
    .then(result=>{
      res.send('CARD DELETED')
    })
    .catch(err=>{
      res.json({message:err})
    })
  })

})


module.exports = router;