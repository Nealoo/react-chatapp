const express = require('express');
const utils = require('utility');
const Router = express.Router();
const model = require('./model');

const User = model.getModel('user');

Router.get('/info',function(req, res){
  return res.json({code:1});
});

Router.get('/list',function(req, res){
  User.find({},function(err,doc){
    return res.json(doc);
  });
});

Router.post('/register',function(req, res){
  const {user, pwd, type} = req.body;
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'user name repeat!'});
    }
    User.create({user,pwd:md5Pwd(pwd),type},function(err, doc){
      if(err){
        return res.json({code:1,msg:'backend error'});
      }else{
        return res.json({code:0});
      }
    });
  });
});

module.exports = Router;

function md5Pwd(pwd){
  const pwdSalt = 'thesalt$ds+ah'+pwd+'f&iaod_*D2fhBdsf';
  return utils.md5(utils.md5(pwdSalt));
}
