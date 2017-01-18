    var mongoose = require('mongoose');
    var DB_URL = 'mongodb://test1:123456@localhost:27017/nmz';
    /* 连接*/
    mongoose.connect(DB_URL);
    /* 连接成功*/
    mongoose.connection.on('connected', function () {    
        console.log('Mongoose connection open to ' + DB_URL);  
    });    
    /* 连接异常*/
    mongoose.connection.on('error',function (err) {    
        console.log('Mongoose connection error: ' + err);  
    });    
    /* 连接断开*/
    mongoose.connection.on('disconnected', function () {    
        console.log('Mongoose connection disconnected');  
    });
    //管理员Schame    
    var adminSchame=new mongoose.Schema({
        userid:{type:String,default:"未填写"},             //活动编号
        name:{type:String,default:"未填写"},            //姓名
        pass:{type:String,default:"未填写"},            //姓名
        email:{type:String,default:"未填写"},           //电话
    })
    //用户
    var userSchame=new mongoose.Schema({
        userid:{type:String,default:"未填写"},             //活动编号
        name:{type:String,default:"未填写"},            //姓名
        pass:{type:String,default:"未填写"},            //姓名
        email:{type:String,default:"未填写"},           //电话
        super:{type:Boolean,default:false},           //电话
        msg:[{ id:String,hasRead:Boolean ,body: String, date: Date }],
    })
    //
    //发布为model
    var admin= mongoose.model('admin',adminSchame);
    var admin= mongoose.model('user',adminSchame);

    userSchame.methods.login = function (userinfo,cb) {
	  this.model('admin').find(userinfo, function(err,result) {
	  		
	  });
	}
	userSchame.methods.logout = function (userinfo,cb) {
	  this.model('admin').find(userinfo, function(err,result) {
	  		
	  });
	}
	userSchame.methods.sign = function (userinfo,cb) {
	  this.model('admin').find(userinfo, function(err,result) {
	  		
	  });
	}
	userSchame.methods.setmsg = function (userinfo,cb) {
	  this.model('admin').find(userinfo, function(err,result) {
	  		
	  });
	}
	userSchame.methods.getmsg = function (userinfo,cb) {
	  this.model('admin').find(userinfo, function(err,result) {
	  		
	  });
	}