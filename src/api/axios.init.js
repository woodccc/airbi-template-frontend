import axios from 'axios'
import Cookies from 'js-cookie'

import env from '@/../config/prod.env'

import {
  goToLoginIfNeed,
  showFullScreenLoading,
  tryHideFullScreenLoading,
  notificationForResponse,
  notificationForError
} from './axiosInitHelper'

const URL_PREFIX = env.URL_PREFIX

// 创建axios实例
const $ = axios.create({
  baseURL: URL_PREFIX,
  timeout: 15000
})

// 请求拦截器
$.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) {
    config.headers.Authorization = token
  }
  if (config.showLoading) {
    showFullScreenLoading()
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
$.interceptors.response.use((response) => {
  if (response.config.showLoading) {
    tryHideFullScreenLoading()
    notificationForResponse(response)
  }
  return response
}, (error) => {
  tryHideFullScreenLoading()
  goToLoginIfNeed(error)
  notificationForError(error)
  return Promise.reject(error)
})

const defaultConfig = { showLoading: true, showSuccessFeedback: true }
export default {
  get: (url, config) => $.get(url, { ...defaultConfig, showSuccessFeedback: false, ...config }),
  put: (url, data, config) => $.put(url, data, { ...defaultConfig, ...config }),
  post: (url, data, config) => $.post(url, data, { ...defaultConfig, ...config }),
  patch: (url, data, config) => $.patch(url, data, { ...defaultConfig, ...config }),
  delete: (url, data, config) => $.delete(url, { ...defaultConfig, ...config })
}
