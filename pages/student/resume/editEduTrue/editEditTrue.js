// pages/student/resume/editEduTrue/editEditTrue.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuEduXp: [],
    eduId: 1
  },
  //提交数据
  submitStu: function (e) {
    if (e.detail.value.schoolName == "") {
      wx.showToast({
        title: '请输入校名',
      })
      return;
    }
    if (e.detail.value.time == "") {
      wx.showToast({
        title: '时间不能为空',
      })
      return;
    }
    if (e.detail.value.majors == "") {
      wx.showToast({
        title: '输入专业名',
      })
      return;
    }
    if (e.detail.value.diploma == "") {
      wx.showToast({
        title: '输入相关学历',
      })
      return;
    }
    var that = this;
    wx.showToast({
      title: '修改成功',
    })
    // wx.request({
    //   url: 'http://192.168.43.94:8080/schoolEmploy/addEduXpServlet',
    //   data: {
    //     openid: that.data.open_id,
    //     schoolName: e.detail.value.schoolName,
    //     des: e.detail.value.des,
    //     diploma: e.detail.value.diploma,
    //     time: e.detail.value.time,
    //     majors: e.detail.value.majors
    //   },
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     if (res.data == "1") {
    //       wx.showToast({
    //         title: '保存成功！',
    //       })
    //     } else {
    //       wx.showToast({
    //         title: '保存失败！',
    //       })
    //     }
    //   },
    //   fail: function (res) {
    //     wx.showToast({
    //       title: '系统出错！',
    //     })
    //   }
    // });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    console.log("-------------" + options.eduId)
    this.setData({
      eduId: options.eduId
    });
   
    var that = this;
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'student/findEduXpById',
      data: {
         eduId:that.data.eduId
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          stuEduXp:res.data
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