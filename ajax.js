


// 第一种

const ajax = (urls, data={}, types="POST") => {
  var baseUrl = 'https://www.lxapp.com/'
  return new Promise((reslove, reject) => {
    wx.request({
      url: baseUrl + urls,
      data: data,
      method: types,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        reslove(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

module.exports = ajax



// 在其他页面调用

// 首先引入
// var ajax = require('../../utils/ajax.js');
// 然后调用
// ajax('/index.php?m=customapi&f=checkTime',
//   {
//     pid: app.pid,
//   },
// ).then((res) => {
//   console.log(res)
// })



// 第二种，无顺序传参


const ajax = ({ urls, data = {}, types = "POST" }) => {
  var baseUrl = 'https://www.lxapp.com/'
  return new Promise((reslove, reject) => {
    wx.request({
      url: baseUrl + urls,
      data: data,
      method: types,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        reslove(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

module.exports = ajax



// 在其他页面调用

// 首先引入
// var ajax = require('../../utils/ajax.js');
// 然后调用
// ajax({
//   urls: '/index.php?m=customapi&f=checkTime',
//   data: {
//     pid: app.pid,
//   },

// }).then((res) => {
//   console.log(res)
// })
