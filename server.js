// 1. 引入express
const express = require('express');
const fs = require('fs');
const path = require('path');
// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装，response是对请求报文的一个封装
app.get('/', (request, response) => {
    // 设置响应
    response.sendFile(path.join(__dirname+'/a.html'))
});

// 监听对应代理服务网址
app.get('/proxy',(req,res) => {
    // 设置响应
    res.sendFile(path.join(__dirname + '/proxy.html'))
})

// 4. 监听端口启动服务
app.listen(8080, () => {
    console.log("http://localhost:8080");
    console.log("服务已经启动，这是A页面对应的地址");
})