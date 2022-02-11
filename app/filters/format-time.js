import locales from '@/constants/locales.js'

export default ({ app }) => {
  function filter(value) {
    if (value) {
      const date = new Date(value)
      const options = { hour: '2-digit', minute: '2-digit' }
      const locale = locales[app.i18n.locale]
      return date.toLocaleTimeString(locale, options)
    }

    return '---'
  }

  return {
    install(Vue, options) {
      const id = options?.id || 'formatTime'
      Vue.filter(id, filter)
    },
  }
}
