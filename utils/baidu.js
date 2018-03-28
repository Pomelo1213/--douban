//百度地图的接口
const URI = 'https://api.map.baidu.com'

const fetch = require('./fetch.js')


function fetchApi(type, params){
  return fetch(URI, type, params)
}

//经纬度默认北京
function getCityName(latitude = 39.90403, longitude = 116.407526){
  const params = { location: `${latitude}, ${longitude}`, output: 'json', ak: 'B61195334f65b9e4d02ae75d24fa2c53' }
  //使用的是百度地图的国际化逆地理编码api
  return fetchApi('geocoder/v2/', params)
  .then(res => res.data.result.addressComponent.city)
}


module.exports = {getCityName}