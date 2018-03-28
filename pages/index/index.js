
const app = getApp()

Page({
  data: {
    movies: [

    ]
  },
  clickStart: function(){
    //跳转到一个tabBar的页面需要用switchTab方法
    wx.switchTab({
      url: '../board/board',
    })
  },
  getCache: function(){
    return new Promise((resolve, reject) => {
      app.wechat.getStorage('tempStorage')
      .then(res => {
        const {movies, expires} = res.data
        if(movies && expires > Date.now()){
          return resolve(res.data)
        }else{
          return reject(null)
        }
      })
      .catch(e => reject(null))
    })
  },
  onLoad: function () {
  /**
   * 一开始是去缓存里面去找
   */
    this.getCache().then(res => {
      this.setData({
        movies: res.movies
      })
      console.log(res)
    })


  /**
   * 通过豆瓣接口,拿到电影，并将首页的电影海报存在缓存中
   */
    app.douban.find('coming_soon', 1, 3)
      .then(res => {
        this.setData({ movies: res.subjects })
        return app.wechat.setStorage('tempStorage', {
          movies: res.subjects,
          expires: Date.now() + 24 * 3600 * 365
        })
      })
      .then(() => console.log('has store moives data'))
  }

})
