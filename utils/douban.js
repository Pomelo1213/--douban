const URI = 'https://douban.uieee.com/v2/movie'
const fetch = require('./fetch')
console.log(1)

/*
  抓取豆瓣电影特定类型的API
  https://developers.douban.com/wiki/?title=movie_v2
  @param  {String} type   类型, 例如：'coming_soon'
  @param  {Object} params 参数
  @param  {Promise}       包含抓取任务的Promise
 */
function fetchApi(type, params) {
  return fetch(URI, type, params)
}

/**
 * 获取列表类型的数据
 * @params  {String} type   类型， 例如：'coming_soon'
 * @params  {Number} page   页码
 * @params  {Number} count  页条数
 * @params  {String} search 搜索关键词
 * @return  {Promise}       包含抓取任务的Promise
 */
function find(type, page = 1, count = 20, search = '') {
  const params = { start: (page - 1) * count, count: count, city: getApp().globalData.currentCity }
  return fetchApi(type, search ? Object.assign(params, { q: search }) : params).then(res => res.data)
}

function findOne(id){
  id = id - 0
  return fetchApi('subject/'+id,{})
}


module.exports = {find, findOne}
