var request = require('../../../common/request.js');//引入公用方法
var util = require('../../../common/util.js');//引入公用方法
var WxParse = require('../../../../wxParse/wxParse.js');
var app = getApp();  
Page({
  data:{
    allData:{},
    id:0
  },
  onLoad: function(options) {
    var that = this;
		request.request('norm/id/'+options.id, 'GET', {}, function(res) {//获取规范列表接口
			console.log(res);
			if(res && res.content){
				that.setData({
					allData: res
				});
				WxParse.wxParse('article', 'html', res.content, that,5);
			}
			
		});
		
/**	var article = '<div>我是HTML代码</div>';  
/** 
* WxParse.wxParse(bindName , type, data, target,imagePadding) 
* 1.bindName绑定的数据名(必填) 
* 2.type可以为html或者md(必填) 
* 3.data为传入的具体数据(必填) 
* 4.target为Page对象,一般为this(必填) 
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选) 
 
var that = this;  
WxParse.wxParse('article', 'html', article, that,5);  
<template is="wxParse" data="{{wxParseData:article.nodes}}"/>
* */
		
	}
})