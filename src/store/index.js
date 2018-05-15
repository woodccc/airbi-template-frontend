import Vue from 'vue'
import Vuex from 'vuex'

import actions from '@/store/actions'
import modules from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules
})
