// pages/student/resume/editSchoolXp/editSchoolXp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sc: [],
    school_xpId: ''
  },
  //提交数据
  submitStu: function (e) {
    if (e.detail.value.xp_name == "") {
      wx.showToast({
        title: '请输入经历名',
      })
      return;
    }
    if (e.detail.value.xp_time == "") {
      wx.showToast({
        title: '时间不能为空',
      })
      return;
    }
    if (e.detail.value.xp_des == "") {
      wx.showToast({
        title: '输入经历描述',
      })
      return;
    }

    var that = this;
    // wx.request({
    //   url: 'http://192.168.43.94:8080/schoolEmploy/addStuSchoolXpServlet',
    //   data: {
      
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
    //       });
    //       wx.navigateTo({
    //         url: '../resume',
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
      school_xpId: options.school_xpId
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'student/findSchoolXpById',
      data: {
        school_xpId: that.data.school_xpId
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          sc:res.data
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