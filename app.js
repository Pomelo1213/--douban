const douban = require('./utils/douban.js')
const wechat = require('./utils/wechat.js')
const baidu = require('./utils/baidu.js')


App({
  onLaunch: function () {
    wechat
      .getLocation()
      .then(res => {
        const {latitude, longitude} = res
        return baidu.getCityName(latitude, longitude)
      }).then(name => {
        console.log(name)
        this.globalData.currentCity = name.replace('市', '')
        console.log('当前城市为：'+ this.globalData.currentCity)
      })
  },
  globalData: {
    currentCity: '北京'
  },
  douban: douban,
  wechat: wechat,
  baidu: baidu
})