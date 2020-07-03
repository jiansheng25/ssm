// pages/xuanjianghui/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      xjh:[],
      xjhName:'',
      pageIndex:1
  },
 getName:function(e){
   var that=this;
    console.log(e.detail.value)
    that.setData({
      xjhName: e.detail.value
    });
 },
  serach:function(){
    if (this.data.xjhName == "") {
      wx.showToast({
        title: '请输入搜索内容！',
      });
      return;
    }
    var that=this;
    that.setData({
      xjh: []
    });
    wx.request({
      url: getApp().globalData.commomPath + 'xuanjianghui/findAllXjhByPage',
      data: {
        xjhName: that.data.xjhName,
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          xjh: res.data
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: getApp().globalData.commomPath + 'xuanjianghui/findAllXjhByPage',
      data: {
          pageIndex:that.data.pageIndex
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
        //  'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
            xjh:res.data
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
 
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'xuanjianghui/findAllXjhByPage',
      data: {
        pageIndex: that.data.pageIndex+1
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
      
        console.log(res.data[0])
        for (var k in res.data){
          that.data.xjh.push(res.data[k])
        }
        // ja.put(newJson);
        console.log(that.data.xjh);
        var newJson=that.data.xjh
        that.setData({
          xjh: newJson,
          pageIndex:that.data.pageIndex+1
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})