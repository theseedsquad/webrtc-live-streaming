import locales from '@/constants/locales.js'

export default {
  computed: {
    browserLocale() {
      return locales[this.$i18n.locale]
    },
  },
}
