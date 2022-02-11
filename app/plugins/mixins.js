import Vue from 'vue'

import mixin from '@/mixins/globals'

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin(mixin)
}
