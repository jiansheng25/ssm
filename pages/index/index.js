//index.js
const app = getApp();
Page({
  data: {
    // openid11
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {

  },

  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      var that = this;
      console.log(e.detail.userInfo.nickName);
      console.log(getApp().globalData.openid);
      wx.request({
        url: getApp().globalData.commomPath + 'getStuInfoByOpendidServlet',
        data: {
          openid1: getApp().globalData.openid
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'content-type': 'application/json'
        },
        success: function(res) {
          // that.queryUsreInfo();
          // var data1=JSON.parse(res.data);
          console.log(res);
          console.log("插入小程序登录用户信息成功！");
        },
        fail: function(res) {
          wx.showToast({
            title: '系统出错！',
          })
        }
      });
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '../postion/index/index'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
})