// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[]
  },
  tapName:function(event){
      console.log(event);
      wx.navigateTo({
        url: '../detail/detail?id=' + event.currentTarget.id,
        id: event.currentTarget.id
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:3001/list',
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res){
          console.log(res);
         // list = res.data.list
          that.setData({
            list: res.data.msg
          });
        }
      })
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