/*
*应用程序的启动（入口）文件
author：xjm
*/
var express = require('express');

var app = express();

app.listen(8081);

console.log("please open localhost:8081 or 127.0.0.1:8081 in browser!");

/*首页
*next是一个函数
 */
app.get('/',function(req,res,next){
//    res.send('<h1>welcome<h1>');
res.send('welcome to my blog');
})

