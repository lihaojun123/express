var express = require('express');
var router = express.Router();
var indexHttp=require("../api/api")
/* GET home page. */
router.get('/', function(req, res, next) {
  indexHttp.getIndex({}).then(apiRes=>{
    res.render('index', { title: apiRes.data.title });
  }).catch(error=>{
    //res.render('error', { status: error.status,message:"服务器响应失败" });
  })
  
});

module.exports = router;
