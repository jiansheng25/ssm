// pages/student/changePwd/changePwd.js
var utils = require("../../../utils/util.js");
var app = getApp();
Page({
  data: {
    open_id: ''
  },
  /**
   * 提交
   */
  submitStu: function (e) {
    console.log(e.detail.value.newPwd1.length )
    if (e.detail.value.newPwd1.length < 6 || e.detail.value.newPwd2.length < 6) {
      wx.showToast({
        title: '密码最少6位',
      });return;
    }
    if (e.detail.value.oldPwd == "") {
      wx.showToast({
        title: '请输入旧密码',
      })
      return;
    }
    if (e.detail.value.newPwd1 == ""|| e.detail.value.newPwd2 == "") {
      wx.showToast({
        title: '请输入新密码',
      })
      return;
    }
    if (e.detail.value.newPwd1 != e.detail.value.newPwd2 ) {
      wx.showToast({
        title: '两次密码不同',
      })
      return;
    }
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'updateStuPwdServlet',
      data: {
        openid: that.data.open_id,
        oldPwd:e.detail.value.oldPwd,
        newPwd1: e.detail.value.newPwd1
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if((res.data=="1")){
          wx.showToast({
            title: '修改成功！',
          });
        }else{
          wx.showToast({
            title: '账号或密码错误！',
          });
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
   * 获取性别
   */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
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