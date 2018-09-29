// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[]
  },
  tapName:function(event){
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
    console.log("==",options);
    var getListUrl = 'http://192.168.1.129:3001/list';
    if(options.id != undefined){
      getListUrl = 'http://192.168.1.129:3001/search';
    }
    wx.request({
      url: getListUrl,
      data: {
        searchValue: options.id
      },
      type: "GET",
      success: function(res){
        // list = res.data.list
        that.setData({
          list: res.data
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