import Vue from 'vue'

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  localize,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

import es from 'vee-validate/dist/locale/es.json'

const LOCALES = { es }

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

for (const [name, schema] of Object.entries(rules)) {
  extend(name, schema)
}

configure({ useConstraintAttrs: false, mode: 'passive' })

export default ({ app }) => {
  localize(app.i18n.locale, LOCALES[app.i18n.locale])

  const beforeLanguageSwitch = app.i18n.beforeLanguageSwitch
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    beforeLanguageSwitch(oldLocale, newLocale)
    localize(newLocale, LOCALES[newLocale])
  }
}
