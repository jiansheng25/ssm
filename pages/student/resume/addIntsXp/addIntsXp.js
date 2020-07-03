// pages/student/resume/addIntsXp/addIntsXp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu_interships_xp: [],
    open_id: ''
  },
  //提交数据
  submitStu: function (e) {
    if (e.detail.value.ints_company == "") {
      wx.showToast({
        title: '请输入企业名',
      })
      return;
    }
    if (e.detail.value.ints_time == "") {
      wx.showToast({
        title: '时间不能为空',
      })
      return;
    }
    if (e.detail.value.ints_postion == "") {
      wx.showToast({
        title: '输入职位名称',
      })
      return;
    }
    if (e.detail.value.ints_detail == "") {
      wx.showToast({
        title: '输入实习描述',
      })
      return;
    }
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'addStuIntsServlet',
      data: {
        openid: that.data.open_id,
        ints_time: e.detail.value.ints_time,
        ints_company: e.detail.value.ints_company,
        ints_detail: e.detail.value.ints_detail,
        ints_postion:e.detail.value.ints_postion
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