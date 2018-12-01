
var mongoose = require('mongoose');

//用表结构
module.exports = new mongoose.Schema({

    username: String,
    password: String
});