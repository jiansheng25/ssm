// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [//轮播图片地址
      {
        url: 'http://img5.imgtn.bdimg.com/it/u=2046449730,555027185&fm=26&gp=0.jpg'
      }, {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2048722111,2928062265&fm=26&gp=0.jpg'
      }, {
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=938381162,1520989437&fm=26&gp=0.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  login:function(e){
    if (e.detail.value.no==""){
      wx.showToast({
        title: '请输入学号',
      });
      return;
    }
    if (e.detail.value.pwd== "") {
      wx.showToast({
        title: '请输入密码',
      });
      return;
    }
    console.log(e.detail.value.no)
    console.log(e.detail.value.pwd);
    var that=this;
    wx.request({
      url: getApp().globalData.commomPath + 'student/login',
      data: {
        opendid: e.detail.value.no,
        stuAccount: e.detail.value.no,
        stuPwd: e.detail.value.pwd
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'content-type': 'application/json'
      },
      success: function (res) {
        if(res.data=="1"){
          wx.showToast({
            title: '登录成功',
          });
          wx.setStorage({
            key: 'stuAccount',
            data: e.detail.value.no,
          });
          wx.setStorage({
              key: 'open_id',
             data: e.detail.value.no
            });
          wx.switchTab({
            url: '../postion/index/index',
          })
        }else{
          wx.showToast({
            title: '账号或密码错误！',
          });
          return;
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
    // var that=this;
    // wx.getStorage({
    //       key: 'open_id',
    //       success: function(res) {
    //         that.setData({openid:res.data})
    //       },
    //     });
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