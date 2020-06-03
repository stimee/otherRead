import VueResource from 'vue-resource'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {
  // 请求发送前的处理逻辑
  request.url = 'http://123.56.134.30' + request.url
  Toast.loading({
    message: '加载中',
    forbidClick: false,
    loadingType: 'spinner',
    duration: 0,
  })

  // 這裡改用 _timeout
  if (request._timeout) {
    let timeout = ''
    timeout = setTimeout(() => {
      Toast.clear()
      Toast.fail('服务器开小差了，请稍后再试')
      request.abort()
      clearTimeout(timeout)
    }, 4000)
  }
  next((res) => {
    Toast.clear()
    return res
  })
})
