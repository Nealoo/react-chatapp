const express = require('express');
const userRouter = require('./user')

const app = express()

app.use('/user',userRouter)

app.get('/',function(req,res){
  res.send('<h1>express started!!</h1>')
})

app.get('/data',function(req,res){

  User.find({}, function(err, doc){
    res.json(doc);
  })
  //res.json({text:'vale'});
})

app.listen(9093,function(){
  console.log('node express');
})
