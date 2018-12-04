var express = require('express');
//创建路由对象
var router = express.Router();

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
    responseData.message = '注册成功';
    res.json(responseData);


});
module.exports = router;