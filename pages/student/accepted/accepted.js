// pages/student/accepted/accepted.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuAccount: '',
    zw: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'stuAccount',
      success: function (res) {
        console.log(res.data)
        that.setData({ stuAccount: res.data })
      },
    })
    wx.getStorage({
      key: 'open_id',
      success: function (res) {
        console.log(res.data + "----stuInfo.js");
        that.setData({
          open_id: res.data
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.request({
      url: getApp().globalData.commomPath + 'employ/findPostionByStatus',
      data: {
       opendid: that.data.stuAccount,
        status: '已录用'
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var newJson1 = []
        for (var k in res.data) {
          if (res.data[k].jobtype != null) {
            newJson1.push(res.data[k]);
          }
        }
        that.setData({
          zw: res.data
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})