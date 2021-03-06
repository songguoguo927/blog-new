/*
*应用程序的启动（入口）文件
author：xjm
*/
const express = require('express');

const swig = require('swig');
//加载数据库模块
const mongoose = require('mongoose');

//加载body-parser 用来处理post提交过来的数据
const bodyParser = require('body-parser');
//创建app应用 =》nodejs http.createServer();
const app = express();


//配置应用模板
// app.engine('ejs',swig.renderFile);
//设置模板文件存放的目录
app.set('views','./views');
//注册所使用的模板引擎，第一个参数为固定，第二个与配置是的第一个参数一致。
app.set('view engine','ejs');
//在开发过程中，需要取消模板缓存
swig.setDefaults({cache:false});

// app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));

//设置静态文件托管
//当用户访问的url以public开始，那么直接返回__dirname + '/public'下的文件
app.use('/public', express.static(__dirname + '/public'));

//动态文件
//根据不同的功能划分模块
app.use('/', require('./routers/main'));
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));

mongoose.connect('mongodb://localhost:27018/blog-new',{useNewUrlParser:true},function(err){
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        app.listen(8081);
        console.log("please open localhost:8081 or 127.0.0.1:8081 in browser!");
    }
});






