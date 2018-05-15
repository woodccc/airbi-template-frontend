import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './style/air-bi-style.css'

import App from './App'
import router from './router'
import store from './store'

import AppIcon from './components/simple/AppIcon'
import './font/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('AppIcon', AppIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
