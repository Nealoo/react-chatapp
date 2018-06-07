const mongoose = require('mongoose')

// connect
const DB_URL = 'mongodb://127.0.0.1:27017/chat-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('connected!! mongo!!');
})

// define tables
const models = {
  user:{
    'user':{type:String, require:true},
    'pwd':{type:String, require:true},
    'type':{type:String, require:true},
    'avatar':String,
    'desc':String,
    'title':String,
    //only for boss below
    'company':String,
    'money':String
  },
  chat:{}
}

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models.m))
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}


//find findOne create

// User.create({
//   user: 'test',
//   age: 666
// },function(err, doc){
//   if (!err){
//     console.log('success create');
//     console.log(doc);
//   }else{
//     console.log('failed create');
//   }
// })

// User.remove({age: 666},function(err, doc){
//   console.log(doc);
// })

// User.update({age: 666}, {'$set': {user: 'new name'}}, function (err, doc) {
//   console.log(doc);
// })
