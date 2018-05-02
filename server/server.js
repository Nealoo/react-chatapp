const express = require('express')
const mongoose = require('mongoose')


// connect
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('connected!! mongo!!');
})

// model and schema
const User = mongoose.model('user', new mongoose.Schema({
  user: {type:String,require:true},
  age: {type:Number,require:true}
}))

//find findOne create

User.create({
  user: 'test',
  age: 666
},function(err, doc){
  if (!err){
    console.log('success create');
    console.log(doc);
  }else{
    console.log('failed create');
  }
})

const app = express()

app.get('/',function(req,res){
  res.send('<h1>express started!!</h1>')
})

app.get('/data',function(req,res){
  res.json({text:'vale'});
})

app.listen(9093,function(){
  console.log('node express');
})
