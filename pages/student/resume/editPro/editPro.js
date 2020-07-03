// pages/student/resume/editPro/editPro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pro: [],
    proId: ''
  },
  //提交数据
  submitStu: function (e) {
    if (e.detail.value.pro_name == "") {
      wx.showToast({
        title: '请输项目名',
      })
      return;
    }
    if (e.detail.value.pro_time == "") {
      wx.showToast({
        title: '时间不能为空',
      })
      return;
    }
    if (e.detail.value.pro_des == "") {
      wx.showToast({
        title: '输入项目描述',
      })
      return;
    }
    var that = this;

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      proId: options.proId
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'student/findProjectXpById',
      data: {
        proId: that.data.proId
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          pro: res.data
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