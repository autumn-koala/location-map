// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"浙江省杭州市拱墅区中国智慧信息产业园"
  },

  /**打开地图 */
  getPosition:function(e){
    console.log(e);
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=MWKGbnuS5uvpeEUriiWVrkbWWgQpqCZC&location=' + e.currentTarget.dataset.latitude + ',' + e.currentTarget.dataset.longitude + '&output=json&coordtype=wgs84ll',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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