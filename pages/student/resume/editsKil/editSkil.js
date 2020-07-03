// pages/student/resume/editsKil/editSkil.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   skil:'',
    open_id: ''
  },
  //提交数据
  submitStu: function (e) {

    if (e.detail.value.skil == "") {
      wx.showToast({
        title: '内容不能为空',
      })
      return;
    }
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'updateSkilServlet',
      data: {
        opendid: that.data.open_id,
        skil: e.detail.value.skil
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        if (res.data == "1") {
          wx.showToast({
            title: '保存成功！',
          });
          wx.navigateTo({
            url: '../resume',
          })
        } else {
          wx.showToast({
            title: '保存失败！',
          })
        }
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
    var that = this;
    wx.getStorage({
      key: 'open_id',
      success: function (res) {
        console.log(res.data + "----editedu.js");
        that.setData({
          open_id: res.data,
          skil:options.skil
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var that = this
    // wx.request({
    //   url: getApp().globalData.commomPath + 'getStuInfoByOpendidServlet',
    //   data: {
    //     openid: that.data.open_id
    //   },
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //     // 'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       stu: res.data,
    //     })
    //   },
    //   fail: function (res) {
    //     wx.showToast({
    //       title: '系统出错！',
    //     })
    //   }
    // });
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