// pages/student/resume/editEdu/editEdu.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu_edu_xp: [],
    open_id: '',
    diploma: ['中专', '大专', '本科', '硕士', '博士'],
    diplomaIndex: 1,
    date: [],
    date2:[],
    dateIndex:48,
    date2Index:50,
    month:[1,2,3,4,5,6,7,8,9,10,11,12],
    monthIndex:0,
    month2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    month2Index: 1
  },
  //提交数据
  submitStu: function(e) {
    var time1 = this.data.date[this.data.dateIndex] +"年"+ this.data.month[this.data.monthIndex] + "月-"+this.data.date2[this.data.date2Index] +"年"+ this.data.month2[this.data.month2Index]+"月";
    console.log(time1)
    if (e.detail.value.schoolName == "") {
      wx.showToast({
        title: '请输入校名',
      })
      return;
    }
    // if (e.detail.value.time == "") {
    //   wx.showToast({
    //     title: '时间不能为空',
    //   })
    //   return;
    // }
    if (e.detail.value.majors == "") {
      wx.showToast({
        title: '输入专业名',
      })
      return;
    }
    // if (e.detail.value.diploma == "") {
    //   wx.showToast({
    //     title: '输入相关学历',
    //   })
    //   return;
    // }
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'addEduXpServlet',
      data: {
        openid: that.data.open_id,
        schoolName:e.detail.value.schoolName,
        des:e.detail.value.des,
        diploma: that.data.diploma[that.data.diplomaIndex],
        time:time1,
        majors: e.detail.value.majors
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data);
        if (res.data == "1") {
          wx.showToast({
            title: '保存成功！',
          });
     
        }else{
          wx.showToast({
            title: '保存失败！',
          })
        }
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },
  getdiploma:function(e){
    console.log(e.detail.value)
    console.log(this.data.diploma[e.detail.value])
    this.setData({
      diplomaIndex:e.detail.value
    })
  },
  getdate: function (e) {
    console.log(e.detail.value)
    console.log(this.data.date[e.detail.value])
    this.setData({
      dateIndex: e.detail.value
    })
  },
  getdate2: function (e) {
    console.log(e.detail.value)
    console.log(this.data.date2[e.detail.value])
    this.setData({
      date2Index: e.detail.value
    })
  },
  getmonth2: function (e) {
    console.log(e.detail.value)
    console.log(this.data.month2[e.detail.value])
    this.setData({
         month2Index: e.detail.value
    })
  },
  getmonth: function (e) {
    console.log(e.detail.value)
    console.log(this.data.month[e.detail.value])
    this.setData({
      monthIndex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var dateArray=[]
    for(var i=1970;i<new Date().getFullYear()+1;i++){
        dateArray.push(i)
    }
    this.setData({
      date:dateArray,
      date2:dateArray
    });
    wx.getStorage({
      key: 'open_id',
      success: function(res) {
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
  onReady: function() {

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