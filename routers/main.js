var express = require('express');
//创建路由对象
var router = express.Router();

/*首页
*next是一个函数
 */

router.get('/',function(req,res,next){
//    res.send('<h1>welcome to my blog<h1>');
    res.render('main/index'); 
});
module.exports = router;