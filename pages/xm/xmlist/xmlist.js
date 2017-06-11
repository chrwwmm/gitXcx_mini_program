var request = require('../../common/request.js');//引入公用方法
var util = require('../../common/util.js');//引入公用方法
var app = getApp();  
Page({
  data:{ 
    allData:{},
    id:0,
    search_value:""
  },
	onTapToItem:function(event) {
    var id = event.currentTarget.id;
    console.log(id);
		console.log(this.data.alldata);
    wx.navigateTo({
      url: 'xmitem/xmitem?id=' + id,
    })
  },
	bindSearch:function(event) {
		var that = this;
		var search_value = event.detail.value;
		that.setData({ search_value: search_value });
		console.log(that.data.search_value);
  },
  search:function(){
  	var that = this;
  	var data = {
  		value:that.data.search_value,
  		pid:that.data.id
  	};
		request.request('unit/search', 'GET', data, function(res) {
			console.log(res);
			that.setData({
				allData: res
			});
		});
  },
  onLoad: function(options) {
    var that = this;
    that.setData({ id: options.id });
		request.request('road/id/'+options.id, 'GET', {}, function(res) {//获取规范列表接口
			console.log(res);
			that.setData({
				allData: res.data,
				name:res.info.name,
				imgUrl:res.info.img
			});
		});
	}
})  