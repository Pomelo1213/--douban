const app = getApp()
Page({

  data: {
    subTitle: '豆瓣',
    type: 'in_theaters',
    hasMore: true,
    page: 1,
    size: 20,
    movies: []
  },

  loadMore: function(){
    // wx.showLoading({
    //   title: '正在努力加载',
    // })
    if(!this.data.hasMore){
      //wx.hideLoading()
      return 
    } 
    
    return app.douban.find(this.data.type, this.data.page++, this.data.size)
    .then(res => {
      //console.log(res)
      if(res.subjects.length){
        this.setData({ movies: this.data.movies.concat(res.subjects), subTitle: res.title })
      }else{
        this.setData({subTitle: res.title, hasMore: false})

      }
      //wx.hideLoading()
    })
    .then(() => {
      wx.setNavigationBarTitle({
        title: this.data.subTitle,
      })
    })
    .catch(err => {
      console.log(err)
      //wx.hideLoading()
    })

  },

  onLoad: function (options) {
    this.data.type = options.type || this.data.type
    this.loadMore()
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
    this.loadMore()
  }

})