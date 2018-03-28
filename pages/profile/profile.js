
const app = getApp()

Page({
  data: {
    id: '',
    movie: {},
  },

  getMovie: function(){
    return app.douban.findOne(this.data.id)
  },

  onLoad: function (options) {
    console.log(options)

    this.setData({ id: options.id })
    this.getMovie()
    .then(res => {
      wx.showLoading({
        title: '努力加载中...',
      })
      this.setData({ movie: res.data }, () => wx.hideLoading())
      console.log(this.data.movie)
    })
    .catch(err => {
      console.log(err)
      wx.hideLoading()
    })

  },


  onReady: function () {
  
  },


  onShow: function () {
  
  },


  onHide: function () {
  
  },

  
  onUnload: function () {
  
  },


  onPullDownRefresh: function () {
  
  },


  onReachBottom: function () {
  
  }


})