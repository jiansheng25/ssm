//app.js
App({
  onLaunch: function () {
    var that=this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        console.log('code', res.code);
        wx.request({
          url: '',
          success(res) {
            // that.globalData.openid = res.data.openid
            // console.log(getApp().globalData.openid+"----app.js")
            // wx.setStorage({
            //   key: 'open_id',
            //   data: res.data.openid
            // });
          },
          fail(err) {
            console.log(err);
          }
        })
      }
    });
    wx.getUserInfo({
      success: function (res) {
   
        console.log(res.userInfo.nickName)
      
        that.globalData.userInfo = res.userInfo;
        wx.setStorage({
          key: 'imgUrl',
          data: res.userInfo.avatarUrl,
        });
        // wx.getStorage({
        //   key: 'open_id',
        //   success: function(res) {
        //     console.log(res.data+"----storage")
        //   },
        // })
      }
    })
    // 192.168.191.1
    //http://l
    //192.168.43.94
    // http://jian25.free.idcfengye.com
  },
  globalData: {
    openid: '',
    userInfo: null,
    commomPath: 'http://localhost:8080/ssm/'
  }
})