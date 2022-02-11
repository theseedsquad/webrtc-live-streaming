import Vue from 'vue'

import formatDate from '@/filters/format-date.js'
import formatTime from '@/filters/format-time.js'
import fullName from '@/filters/full-name.js'

export default (context) => {
  Vue.use(formatDate(context))
  Vue.use(formatTime(context))
  Vue.use(fullName(context))
}
