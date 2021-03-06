/*
  抓取远程API的结构
  https://developers.douban.com/wiki/?title=movie_v2
  @param {String} api    api根地址
  @param {String} path   请求路径
  @param {Object} params 参数
  @return {Promise}      包含抓取任务的Promise
 */
module.exports = function (api, path, params){
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${api}/${path}`,
      data: Object.assign({}, params),
      method: 'get',
      header: {'content-type': 'json'},
      success: resolve,
      fail: reject
    })
  })
}

