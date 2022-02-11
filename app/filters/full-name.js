export default () => {
  function filter(user) {
    return `${user?.first_name || '---'} ${user?.last_name || ''}`.trim()
  }

  return {
    install(Vue, options) {
      const id = options?.id || 'fullName'
      Vue.filter(id, filter)
    },
  }
}
