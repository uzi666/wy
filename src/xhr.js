// 引入axios
import axios from 'axios'
// import { Loading } from 'element-ui'

// 服务器地址
axios.defaults.baseURL = 'https://iamor.com.cn:3010/'
// axios.defaults.baseURL = 'http://localhost:3009/'

// let loadingInstance = {}
// 接口地址
let apis = {
  // 登录
  login: 'user/login'
}
export default (Vue) => {
  const xhr = (api, data = {}, config = {
    headers: {
      authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  }) => {
    // 新建 promise 对象，设定默认的掉用成功成功失败的处理函数
    let promise = {
      successHandler () {},
      errorHandler ({code, message, err}) {}
    }
    promise.success = (cb) => {
      // 设定 promise 的 success 处理
      if (typeof cb === 'function') {
        promise.successHandler = cb
      }
      return promise
    }
    promise.error = (cb) => {
      // 设定 promise 的 error 处理
      if (typeof cb === 'function') {
        promise.errorHandler = cb
      }
      return promise
    }
    // 发起网络请求
    // loadingInstance = Loading.service()
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {})
    axios.post(apis[api], data, config).then((res) => {
      if (res.status === 200) {
        if (res.data.success) {
          if (res.data.code === -1) {
            alert('身份认证失败或过期，请重新登录！')
            window.location.hash = '/'
            sessionStorage.clear()
            return false
          }
          let payload = res.data
          delete payload.success
          delete payload.code
          delete payload.message
          promise.successHandler(payload)
        } else {
          promise.errorHandler({
            code: -1,
            err: res.data.err
          })
        }
      }
    }).catch((err) => {
      // loadingInstance.close()
      promise.errorHandler({
        code: -1,
        err: err
      })
    })
    return promise
  }

  Vue.xhr = xhr
  Vue.prototype.$xhr = xhr
}
