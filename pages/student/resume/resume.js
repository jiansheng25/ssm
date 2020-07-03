// pages/student/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrl:'',
      stu:[],
      edu:[],
      pro:[],
      sc:[],
      ints:[],
      age:''
  },
  
  //教育经历页面
  gotoEdu:function(){
    var that=this;
    wx.navigateTo({
      url: 'editEdu/editEdu',
    })
  },
  //实习经历页面
  gotoInts: function () {
    var that = this;
    wx.navigateTo({
      url: 'addIntsXp/addIntsXp',
    })
  },
  //项目经历页面
  gotoPro: function () {
    var that = this;
    wx.navigateTo({
      url: 'addPro/addPro',
    })
  },
  gotoSelfDes:function(){
    var that = this;
    wx.navigateTo({
      url: 'editSelfDes/editSelfDes?selfDes='+that.data.stu.selfDes,
    })
  },
  gotoSkil: function () {
    var that = this;
    wx.navigateTo({
      url: 'editsKil/editSkil?skil=' + that.data.stu.skil,
    })
  },
  gotoZhengshu: function () {
    var that = this;
    wx.navigateTo({
      url: 'editZhengshu/editZhengshu?zhengshu=' + that.data.stu.zhengshu,
    })
  },
  //校园经历页面
  gotoSc: function () {
    var that = this;
    wx.navigateTo({
      url: 'addSchoolXp/addScholXp',
    })
  },
  //更改头像
  gotoShow: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        console.log(res.tempFilePaths)
        that.setData({
          imgUrl: res.tempFilePaths
        });
        wx.setStorage({
          key: 'imgUrl',
          data: res.tempFilePaths,
        })
      },
      fail: function () {
        wx.showToast({
          title: '获取相片失败！',
        })
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'imgUrl',
      success: function (res) {
        console.log(res.data)
        that.setData({
          imgUrl: res.data
        })
      },
    });
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
    var that = this
    //获取学生基本信息
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
        var timestamp = Date.parse(new Date());
        var date = new Date(timestamp);
        //获取年份  
        var y = date.getFullYear();

        var age2 = res.data.age
        console.log(y)
        console.log(res.data.age)
        var age3 = parseInt(age2.substring(0, 4));
        var age4 = y - age3
        console.log(age4)
        var age5 = age4 + "(" + age2.substring(0, 7) + ")";
        that.setData({
          stu: res.data,
          age:age5
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
    this.onLoad()
    this.onReady()
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