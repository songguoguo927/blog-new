var express = require('express');
//创建路由对象
var router = express.Router();

var User = require('../models/User');

var responseData;

router.use(function(req,res,next){
    responseData = {
        code: 0,
        message: ''
    }
    next();
});

/**
 * 用户注册
 *  注册逻辑
 * 1，用户名不能为空
 * 2，密码不为空
 * 3，两次输入密码要一致
 * 
 * 1，用户是否已经被注册
 *    数据库查询
 */
router.post('/user/register',function(req,res,next){
    // console.log( req.body );
    var username = req.body.username;
    // var password = req.body.password;
    // var repassword = req.body.repassword;

    if(username == ''){
        responseData.code = 1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }

    if(password == ''){
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;  //zuduan后续代码执行
        
    }

    if(password != repassword){
        responseData.code = 2;
        responseData.message = '两次输入密码不一致';
        res.json(responseData);
        return;
    }

//用户名是否被注册,如果数据库中已经存在和我们要注册的用户名同名的数据，表示该用户名已经被注册了
  User.fineOne({ username: username}).then(function(userInfo){
      console.log(userInfo);
      if(userInfo){
        //数据库中有该记录
          responseData.code = 4;
          responseData.message = '用户名已经被注册了';
          res.json(responseData);
          return;
      }
      //数据库中没有该记录，则进行存储
      var user =new User({
          username: username,
          password: password
      });
      return user.save();

  }).then(function(newUserInfo){
      console.log(newUserInfo);
      responseData.message = '注册成功';
      res.json(responseData);
  });
    

    
    //  responseData.message ='注册成功';
    //  res.json(responseData);

});
module.exports = router;