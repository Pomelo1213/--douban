
const app = getApp()

Page({
  data: {
    movies: [],
    hasMore: false,
    search: '',
    page: 1,
    count: 20
  },

  loadMore: function(){
    if(!this.data.hasMore)return

    return app.douban.find('search', this.data.page++, this.data.count, this.data.search)
    .then(res => {
      if(res.subjects){
        this.setData({
          movies: this.data.movies.concat(res.subjects),
          hasMore: true
        })
        console.log(this.data.movies)

      }else{
        this.setData({
          hasMore: false
        })

      }
    })
    .catch(err => {
      console.log(err) 

    })
  },

  handleSearch: function(e){
    //获取输入框中的数据
    if(!e.detail.value) return
    //每次搜索都是重新开始的,所有值都得重新初始.
    this.setData({ 
      search: e.detail.value,
      page: 1,
      hasMore: true,
      movies: []
    })

    this.loadMore()
  },

  onLoad: function (options) {
    
  },


  onReachBottom: function () {
    this.loadMore()
  }

})