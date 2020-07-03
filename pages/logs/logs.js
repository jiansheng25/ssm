//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    // wx.request({
    //   url: 'http://192.168.43.94:8080/schoolEmploy/testServlet',
    //   data: {

    //   },
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     var a = res.data
    //     wx.showToast({
    //       title: '成功',
    //     })
    //   },
    //   fail: function (res) {
    //     wx.showToast({
    //       title: '系统出错！',
    //     })
    //   }
    // });
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
