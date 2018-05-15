import { Loading, Notification, Message } from 'element-ui'
import _ from 'lodash'
import Cookies from 'js-cookie'

import router from '@/router/index'

let needLoadingRequestCount = 0
let loading

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    loading.close()
  }
}

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    _.debounce(tryCloseLoading, 100)()
  }
}

export function notificationForError(error) {
  const status = _.get(error, 'response.status')
  const errorMessage = status === 401 ? '用户认证过期，请重新登录' : _.get(error, 'response.data.error')

  const message = `
    <div>
      <p>message: ${errorMessage}</p>
      <p>status: ${status}</p>
    </div>
  `
  Notification.error({
    title: 'Error',
    duration: 6000,
    dangerouslyUseHTMLString: true,
    message
  })
}

export function notificationForResponse(response) {
  if (_.get(response, 'config.showSuccessFeedback')) {
    Message({message: '成功', type: 'success'})
  }
}

export function goToLoginIfNeed(error) {
  const status = _.get(error, 'response.status')
  if (status === 401) {
    Cookies.remove('token')
    router.push({path: '/login'})
  }
}
