"use strict"
let request = require('./../common/request.js');

Page({
	data: {
		searchValue:"",
		msgList: []
	},
  onTapToItem: function (event) {
    var id = event.currentTarget.id;
    console.log(id);
    console.log(this.data.alldata);
    wx.navigateTo({
      url: '../lm/lmlist/lmitem/lmitem?id=' + id,
    })
  },
	dataChange: function(e) {//搜索输入监听
		let that = this;
		let searchValue = e.detail.value;
		that.setData({
			searchValue: searchValue
		})
	},
	dosearch: function(e) {//执行搜索
		let that = this;
		console.log(that.data.searchValue);
		let val = that.data.searchValue;
		if(!val){
			return;
		}
		request.request('norm/search', 'GET', { value: val }, function(res) {
			that.setData({
				msgList: res
			})
		})
	}
})