var request = require('../common/request.js');//引入公用方法
var util = require('../common/util.js');//引入公用方法
//lm.js
//获取应用实例  
var app = getApp()
Page({
	data: {
		tabArr: {
			curHdIndex: 0
		},
		allData:{}
	},
	tabFun: function(e) {
		//获取触发事件组件的dataset属性 
		var _datasetId = e.target.dataset.id;
		console.log("----" + _datasetId + "----");
		var _obj = {};
		_obj.curHdIndex = _datasetId;
		this.setData({
			tabArr: _obj
		});
	},	
onTapToDetail:function(event) {
    var id = event.currentTarget.id;
    console.log(id);
    wx.navigateTo({
      url: 'xmlist/xmlist?id=' + id,
    })
  },

	onLoad: function(options) {
		console.log("------");
		var that = this;
		request.request('area/type/all', 'GET', {}, function(res) {
			console.log(res);
			that.setData({
				allData: res
			});
		});
	},
	onShow: function() {}
});