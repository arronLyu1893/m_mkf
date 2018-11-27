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

//功能一：首页轮播图
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

//功能二:首页1F商品大图
app.get("/f_imagelist",(req,res)=>{
  var obj = [
    {id:1,img_url:"http://127.0.0.1:3000/img/index_product/f1_1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/index_product/f1_2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/index_product/f1_3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/img/index_product/f1_4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/img/index_product/f1_5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/img/index_product/f1_6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/img/index_product/f1_7.png"},
    {id:8,img_url:"http://127.0.0.1:3000/img/index_product/f1_8.png"},
    {id:9,img_url:"http://127.0.0.1:3000/img/index_product/f1_9.png"},
    {id:10,img_url:"http://127.0.0.1:3000/img/index_product/f1_10.png"}
  ];
  res.send(obj);
});

//功能三：商品列表 
app.get("/goodslit2",(req,res)=>{
  var obj = {};
  obj.pic=[]
  obj.phone=[]
  var isok=0;
  var sql = "SELECT * FROM mkf_phone_pic";
  pool.query(sql,[],(err,result)=>{
    if(err)throw (err);
    obj.pic=result
    isok+=50;
    console.log(obj)
    if(isok==100){
      res.send(obj);
      res.end;
    }
  })
  var sql = "SELECT * FROM mkf_phone";
  pool.query(sql,[],(err,result)=>{
    if(err)throw (err);
    obj.phone=result
    isok+=50;
    if(isok==100){
      res.send(obj);
      res.end;
    }
  })
})
//功能四：商品页详情
app.get("/goodsinfo",(req,res)=>{
  var lid=req.query.lid;
  var obj={};
  obj.product=[];
  obj.pics=[];
  obj.specs=[];
  var isok=0
  //用lid查询当前商品信息
  var sql1="SELECT * FROM mkf_phone WHERE lid=?";
  //用lid查询当前商品图片列表
  var sql2="SELECT * FROM mkf_phone_pic WHERE lid=?";
  //用lid查询当前商品同系列的规格列表
  var sql3="SELECT lid,memory,color,editon FROM mkf_phone where family_id=( select family_id from mkf_phone where lid=?)";

  pool.query(sql1,[lid],(err,result)=>{
    if(err) console.log(err);
    console.log(result);
    obj.product=result[0];
    isok+=50
    if(isok==150){
      res.send(obj)
    res.end();
    }
  })
  pool.query(sql2,[lid],(err,result)=>{
    if(err) console.log(err);
    console.log(result)
    obj.pics=result;
    isok+=50
    if(isok==150){
      res.send(obj)
    res.end();
    } 
  })
  pool.query(sql3,[lid],(err,result)=>{
    if(err) console.log(err);
    console.log(result)
    obj.specs=result;
    isok+=50
    if(isok==150){
      res.send(obj)
    res.end();
    }

  })


})
// 功能五：将商品信息添加至购物车
//-INSERT INTO mkf_cart VALUES();
app.get("/addCart",(req,res)=>{
  //1.参数 商品id  商品数量
    //1.1: 获取参数
    var lid = req.query.lid;
    var count =  req.query.count;
    //1.2: 创建正则表达式验证 必做
    //所有用户参数都需要验证 js第一次 node.jd第二次
    //安全
    var reg = /^[0-9]{1,}$/;    //正则
    if(!reg.test(lid)){       //如果参数验证失败
      res.send({code:-1,msg:"商品编号参数有误"});
      return;                      //输出错误信息并停止
      
    }
    if(!reg.test(count)){
      res.send({code:-2,msg:"商品数量参数有误"});
      return;                      //输出错误信息并停止
    }
    //1.3:如果验证失败返回
    //2:连接数据库
    //3:返回成功值
    //http://localhost:3000/addCart?pid=3&count=5 
    res.send({code:1,msg:"添加成功"});

})


//功能九：用户登录
app.get("/login",(req,res)=>{
  //console.log(req.query.uname,req.query.upwd)
  //1:参数 2 uname upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:正则表达式验证 
  //3:sql 
  var sql = " SELECT count(id) as c FROM mkf_user1";
      sql +=" WHERE uname=? AND upwd = md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
   // console.log(result);
        if(err)throw err;
        if(result[0].c==0){
          res.send({code:-1,msg:"用户名密码有误"});
        }else{
          res.send({code:1,msg:"登录成功"});
        }
  })

});



