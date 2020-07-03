// pages/student/index/index.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    stu:[],
    open_id:''
  },
  gotoShow: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          url: res.tempFilePaths
        });
        wx.setStorage({
          key: 'imgUrl',
          data: res.tempFilePaths,
        })
      },
      fail: function () {
        // wx.showToast({
        //   title: '获取相片失败！',
        // })
      },
      complete: function () {
        // complete
      }
    })
  },
  gotoWaiting:function(){
    wx.navigateTo({
      url: '../waiting/waiting',
  })
  },
  gotoAccepted: function () {
    wx.navigateTo({
      url: '../accepted/accepted',
    })
  },
  gotoRejected: function () {
    wx.navigateTo({
      url: '../rejected/rejected',
    })
  },
  gotoStuInfo:function(){
    wx.navigateTo({
      url: '../stuInfo/stuInfo',
    })
  },
  gotoResume:function(){
    wx.navigateTo({
      url: '../resume/resume',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'imgUrl',
      success: function(res) {
        console.log(res.data)
        that.setData({
          url: res.data
        })
      },
    });
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
      url: getApp().globalData.commomPath + 'student/findStuByOpenid',
      data: {
        opendid: that.data.open_id
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          stu: res.data
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
    var that=this;
    wx.getStorage({
      key: 'imgUrl',
      success: function (res) {
        console.log(res.data)
        that.setData({
          url: res.data
        })
      }
    })
     this.onReady();
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