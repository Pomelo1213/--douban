// pages/board/board.js
const app = getApp()

Page({

  data: {
    boards: [
      {key: 'in_theaters'},
      {key: 'coming_soon'},
      {key: 'new_movies'},
      {key: 'top250'}
    ],
    id: 0
  },


  onLoad: function (options) {
    //console.log(this.data.boards)
    wx.showLoading()

      const tasks = this.data.boards.map((board) => {
        return app.douban.find(board.key, 1, 8)
        .then(res => {
          board.title = res.title
          board.subjects = res.subjects
          //console.log(res)
          return board
        })
      })

      Promise.all(tasks)
      .then(res => {
        console.log(res)
        this.setData({
          boards: res
        })
      })
      
      wx.hideLoading()

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
  
  },

  onShareAppMessage: function () {
  
  }
})