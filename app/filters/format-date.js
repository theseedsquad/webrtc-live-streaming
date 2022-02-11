import locales from '@/constants/locales.js'

export default ({ app }) => {
  function filter(value) {
    if (value) {
      const date = new Date(value)
      const options = { day: 'numeric', month: 'short', year: 'numeric' }
      const locale = locales[app.i18n.locale]
      return date.toLocaleDateString(locale, options)
    }

    return '---'
  }

  return {
    install(Vue, options) {
      const id = options?.id || 'formatDate'
      Vue.filter(id, filter)
    },
  }
}
