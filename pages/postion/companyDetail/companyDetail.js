// pages/postion/companyDetail/companyDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comDisplay: 'black',
    jobDisplay: 'none',
    comBackcolor: '#ffffff',
    jobBackcolor: '#f5f8fb',
    zw:[]
  },
  getComInfo: function() {
    var that = this;
    console.log("公司简介")
    that.setData({
      comBackcolor: '#ffffff',
      jobBackcolor: '#f5f8fb',
      comDisplay: 'black',
      jobDisplay: 'none'
    });
  },
  getComRecriut: function() {
    var that = this;
    console.log("在招")
    that.setData({
      comBackcolor: '#f5f8fb',
      jobBackcolor: '#ffffff',
      comDisplay: 'none',
      jobDisplay: 'black'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      var that=this;
      console.log(options.account);
      that.setData({
          account:options.account
      });
    wx.request({
      url: getApp().globalData.commomPath + 'employ/findPostionByCompany',
      data: {
       account:options.account
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          zw: res.data
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
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})