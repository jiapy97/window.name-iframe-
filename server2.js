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
    response.sendFile(path.join(__dirname+'/b.html'))
});



// 4. 监听端口启动服务
app.listen(5200, () => {
    console.log("http://localhost:5200");
    console.log("服务已经启动，这是B网页的地址");
})