//app.js
//1:加载模块
const express = require('express');
const pool = require("./pool");
//2:创建express对象
var app = express();
const cors = require("cors");
app.use(cors({
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true
}))

//3:指定静态目录
app.use(express.static(__dirname+'/public'));
//4:绑定监听端口
app.listen(3000,()=>{ console.log("success"); });

//功能一：学子商城首页轮播图
//GET   /imagelist   json
app.get("/imagelist",(req,res)=>{
  var obj = [
    {id:1,img_url:"http://127.0.0.1:3000/img/banner1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/banner2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/banner3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"},
    {id:5,img_url:"http://127.0.0.1:3000/img/banner5.jpg"}
  ];
  res.send(obj);
});




//功能九：用户登录
app.get("/login",(req,res)=>{
  //1:参数 2 uname upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:正则表达式验证 
  //3:sql 
  var sql = " SELECT count(id) as c FROM mkf_user1";
      sql +=" WHERE uname=? AND upwd = md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result[0].c==0){
          res.send({code:-1,msg:"用户名密码有误"});
        }else{
          res.send({code:1,msg:"登录成功"});
        }
  })

});
