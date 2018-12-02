var express = require('express');
//创建路由对象
var router = express.Router();

router.post('/user/register',function(req,res,next){

    console.log('register');
});
module.exports = router;