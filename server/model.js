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
