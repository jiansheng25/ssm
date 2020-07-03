// pages/student/stuInfo/stuInfo.js
var utils = require("../../../utils/util.js");
var app = getApp();
Page({
  data: {
    open_id: '',
    stu: [],
    age: new Date().getFullYear()
  },
  /**
   * 提交
   */
  submitStu: function(e) {
   
    if (e.detail.value.phone == "") {
      wx.showToast({
        title: '电话不能为空',
      })
      return;
    }
    if (e.detail.value.email == "") {
      wx.showToast({
        title: '邮箱不能为空',
      })
      return;
    }
    if (e.detail.value.age == "") {
      wx.showToast({
        title: '年龄不能为空',
      })
      return;
    }
    if (e.detail.value.address == "") {
      wx.showToast({
        title: '地址不能为空',
      })
      return;
    }
    if (!utils.isInteger(e.detail.value.age)) {
      wx.showToast({
        title: '年龄格式错误',
      });
      return;
    }
    if (!utils.isPhone(e.detail.value.phone)) {
      wx.showToast({
        title: '电话格式错误',
      });
      return;
    }
    if (!utils.isEmail(e.detail.value.email)) {
      wx.showToast({
        title: '邮箱格式错误',
      });
      return;
    }

    var that = this;
    console.log(that.data.gender)
    wx.request({
      url: getApp().globalData.commomPath + 'updateStuInfoServlet',
      data: {
        openid: that.data.open_id,
        gender: that.data.gender,
        phone: e.detail.value.phone,
        email: e.detail.value.email,
        age: e.detail.value.age,
        address: e.detail.value.address
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data);
        wx.showToast({
          title: '保存成功！',
        });
       wx.switchTab({
         url: '../index/index',
       })
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },
  /**
   * 获取性别
   */
  radioChange: function(e) {
    var that = this;
    console.log(e.detail.value)
    that.setData({
      gender: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getStorage({
      key: 'open_id',
      success: function(res) {
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
  onReady: function() {
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
      success: function(res) {
        var timestamp = Date.parse(new Date());
        var date = new Date(timestamp);
        //获取年份  
        var y = date.getFullYear();

        var age2 = res.data.age
        console.log(y)
        var age3 = parseInt(age2.substring(0, 4));
        var age4 =y-age3
        console.log(age4)
        var age5 = age4+ "(" + age2.substring(0, 7)+")";
        that.setData({
          stu: res.data,
          age: age5
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})