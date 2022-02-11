import Vue from 'vue'

import clickOutside from '@/directives/click-outside.js'

export default (context) => {
  Vue.use(clickOutside(context))
}
