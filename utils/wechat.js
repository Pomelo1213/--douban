
function getLocation(){
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'wgsb4', 
      success: resolve,
      fail: reject
    })
  })
}

function setStorage(storageName, storageData){
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key: storageName,
      data: storageData,
      success: resolve,
      fail: reject
    })
  })
}

function getStorage(storageName){
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: storageName,
      success: resolve,
      fail: reject
    })
  })
}



module.exports = {
  getLocation,
  setStorage,
  getStorage
}