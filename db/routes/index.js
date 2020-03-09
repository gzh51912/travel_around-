var express = require('express');
var router = express.Router();
var mongoose = require("../db/connect");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const formidable = require('formidable');

//建立模型
var Goods = mongoose.model("student",{name:String,age:Number},"student");
// 首页
var Home1 = mongoose.model("home",{name:String,age:Number},"home");
// 列表页
var List1 = mongoose.model("list_min",{name:String,age:Number},"list_min");

var List2 = mongoose.model("list_bottom",{name:String,age:Number},"list_bottom");

// 详情页
var Detail = mongoose.model("detail",{image:String,pid:Number},"detail");

// 购物车
var Cart = mongoose.model("cart",{image:String,pid:String,num:String,title:String,priceLabel:String,days:String,placeLabel:String,productType:String},"cart");


//可以拦截所有的请求

// router.use(function(req,res,next){
//       if(req.url!=="/users/login" &&  req.url!=="/users/reg"){
//       		//验证
      		
//       		  jwt.verify(req.headers.token,"haha",(err,code)=>{
// 				console.log(err);	  
// 				if(!err){
//       		  	  	  next();
//       		  	  }
//       		  	  else{
//       		  	  	 res.json({
//       		  	  	 	status:-1,
//       		  	  	 	message:'error,valid fail'
//       		  	  	 })
//       		  	  }
//       		  })
//       }
//       else{  //登录和注册可以正常访问接口
//       	  next();
//       }
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 文件上传
router.post("/upload",(req,res)=>{
	const form = formidable({ multiples: false });
	form.uploadDir="./public/upload/"  //设置上传路径
	form.parse(req, (err, fields, files) => {
	   
		 if(!files.file) return;  //没有上传文件，不进行任何处理
		 //上传文件重命名
		 fs.renameSync(files.file.path,form.uploadDir+files.file.name);
		 res.json({
			 status:0,
			 path:"/upload/"+files.file.name
		 })
	  });
})



//url   get    //params  //返回值
router.get("/mylist",(req,res)=>{
	/* res.setHeader("Access-Control-Allow-Origin","*"); */
	console.log('/mylist')
	Goods.find({}).then((response)=>{
		res.json({
			status:0, //0 正常返回  -1 出错啦
			list:response,
		})
	})
})


router.get("/home1",(req,res)=>{
	/* res.setHeader("Access-Control-Allow-Origin","*"); */
	console.log('home111')
	Home1.find({}).then((response)=>{
		res.json({
			status:0, //0 正常返回  -1 出错啦
			list:response,
		})
	})
})


router.get("/list1",(req,res)=>{
	/* res.setHeader("Access-Control-Allow-Origin","*"); */
	console.log('list1')
	List1.find({}).then((response)=>{
		res.json({
			status:0, //0 正常返回  -1 出错啦
			list:response,
		})
	})
})


router.get("/list2",(req,res)=>{
	/* res.setHeader("Access-Control-Allow-Origin","*"); */
	console.log('list2')
	List2.find({}).then((response)=>{
		res.json({
			status:0, //0 正常返回  -1 出错啦
			list:response,
		})
	})
})

// 详情页
router.get("/detail",(req,res)=>{
	/* res.setHeader("Access-Control-Allow-Origin","*"); */
	var {pid} = req.query;
	var image = Number(pid)
	Detail.find({pid:image}).then((response)=>{
		res.json({
			status:0, //0 正常返回  -1 出错啦
			list:response.slice(0,1),
		})
	})
})


// 加入购物车
router.post('/cart',(req,res)=>{
	console.log("cart")
	var {pid, title, priceLabel, days, productType ,placeLabel,num} = req.body;
	console.log(pid, title, priceLabel, days, productType ,placeLabel,num)
	new Cart({pid, title, priceLabel, days, productType ,placeLabel,num}).save().then((resAll)=>{
	
		 res.json({
			 status:0
		 })
	})
})


// 删除购物车商品
router.delete("/cart",(req,res)=>{
	var {pid} = req.query;
	console.log(pid,"/cart")
	 Cart.remove({pid}).then(()=>{
	 	res.json({
	 		status:0
	 	})
	 })

})


// 购物车查找
router.get("/cart",(req,res)=>{  
	var {pid} = req.query;
	console.log(pid)
	pid ==undefined ? {} :{pid}
	Cart.find(pid == undefined ? {} :{pid}).then((response)=>{
		
		res.json({
			status:0, //0 正常返回  -1 出错啦
			list:response,
		})
	})
})


// 修改购物车商品数量
router.put("/cart",(req,res)=>{
	
	let {pid,num}=req.body;
	console.log(pid,num)
	Cart.update({pid:pid},{$set:{num}}).then((resAll)=>{
		console.log(resAll)
		res.json({
			status:0
		})
	})
})





// router.post('/add',(req,res)=>{
// 	console.log("add")
// 	var {name,age} = req.body;
// 	new Goods({name,age}).save().then(()=>{
// 		 res.json({
// 			 status:0
// 		 })
// 	})
// })
// /**
//  * @api {post} /del Remove document
//  * @apiName removedoc
//  * @apiGroup Remove
//  *
//  * @apiParam {Number} id Users unique ID.
//  *
//  * @apiSuccess {Number} status 0 成功

//  */
// router.post("/del",(req,res)=>{
// 	console.log("/del")
// 	 var id = req.body.id;
// 	 Goods.remove({_id:id}).then(()=>{
// 	 	res.json({
// 	 		status:0
// 	 	})
// 	 })

// })

// //根据页码进行分页
// router.get("/pagelist",(req,res)=>{
// 	console.log("/pagelist")
// 	  var {page,pageSize} = req.query;
// 	  Goods.find().then((resAll)=>{ //拿到所有的文档
// 	  	//拿到当前的页面的文档
// 	  	Goods.find().limit(Number(pageSize)).skip((page-1)*pageSize).then((response)=>{
// 	  		  res.json({
// 	  		  	status:0,
// 	  		  	 pageCount:Math.ceil(resAll.length/pageSize),
// 	  		  	 list:response,
// 	  		  	 count:resAll.length
// 	  		  })
// 	  	})
// 	  })
// })
// //根据id 返回文档
// router.get("/getDocById",(req,res)=>{
// 	console.log("/getDocById")
// 	  var id= req.query.id;
// 	  Goods.find({_id:id}).then((response)=>{
// 	  	res.json({
// 	  		status:0,
// 	  		doc:response[0]
// 	  	})
// 	  })
// })
// //确认修改
// router.post("/modifyok",(req,res)=>{
// 	console.log("/modifyok")
// 	let {id,name,age}=req.body;
// 	Goods.update({_id:id},{$set:{name,age}}).then(()=>{
// 		res.json({
// 			status:0
// 		})
// 	})
// })


module.exports = router;
