// pages/postion/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    employId: 0,
    perfercolor: '#f2f2f3',
    em: [],
    openid: '',
    perferId: 0,
    stuAccount:'',
    stu:[],
  },
 //申请职位
  apply:function(){
    var that=this;
    wx.showModal({
      title: '申请提示',
      content: '确定申请吗',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: getApp().globalData.commomPath + 'employ/apply',
            data: {
              employId: that.data.employId,
              opendid: that.data.stuAccount
            },
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              if (res.data == "1") {
                  wx.showToast({
                    title: '申请成功',
                  });

              }else if(res.data=="-1"){
                wx.showToast({
                  title: '已申请过该职位',
                })
              }else{
                wx.showToast({
                  title: '申请失败',
                })
              }
            },
            fail: function (res) {
              wx.showToast({
                title: '系统出错！',
              })
            }
          });
        } 
      }
    })
  },
  // 收藏操作
  perferChange:function(){
    var that=this;
    if (that.data.perfercolor =="#f2f2f3"){
      wx.showToast({
        title: '收藏成功',
      })
    }else{
      wx.showToast({
        title: '已取消收藏',
      })
    };
    wx.request({
      url: getApp().globalData.commomPath + 'employ/collect',
      data: {
        employId: that.data.employId,
        opendid: that.data.openid
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data == "1") {
          if (that.data.perfercolor == "#f2f2f3") {
            that.setData({
              perfercolor: "#ff4d00",
            });
          }else{
            that.setData({
              perfercolor: "#f2f2f3",
            });
          };
        } else {
          wx.showToast({
            title: '操作失败！',
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
  onLoad: function(options) {
    var that = this;
    wx.getStorage({
          key: 'stuAccount',
          success: function(res) {
            console.log(res.data)
            that.setData({stuAccount:res.data})
          },
        })
    console.log(options.employId)
    this.setData({
      employId: options.employId
    });
    //获取详情
    wx.request({
      url: getApp().globalData.commomPath + 'employ/findPostionById',
      data: {
        employId: options.employId
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data);
        // console.log(res.data[0].account+"-----")
        that.setData({
          em: res.data
        });
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
    wx.getStorage({
      key: 'open_id',
      success: function(res) {
        that.setData({
          openid: res.data
        })
      },
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    console.log(that.data.employId);
 
    wx.request({
      url: getApp().globalData.commomPath + 'employ/isPrefer',
      data: {
        employId: that.data.employId,
        opendid: that.data.openid
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        if (res.data == "1") {
          that.setData({
            perfercolor: "#ff4d00",
          });
        } else {
          that.setData({
            perfercolor: "#f2f2f3",
          });
        }
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