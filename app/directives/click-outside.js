export default () => {
  function onClickOutside(event, el, handler) {
    const isClickOutside = event.target !== el && !el.contains(event.target)
    return isClickOutside ? handler(event, el) : null
  }

  function toggleEventListeners(action, eventHandler) {
    document[`${action}EventListener`]('click', eventHandler, true)
  }

  const instances = new Map()

  const directive = {
    bind(el, { value: handler }) {
      const eventHandler = (event) => onClickOutside({ el, event, handler })

      toggleEventListeners('add', eventHandler)

      instances.set(el, eventHandler)
    },
    unbind(el) {
      const eventHandler = instances.get(el)

      toggleEventListeners('remove', eventHandler)

      instances.delete(el)
    },
  }

  return {
    install(Vue, options) {
      const id = options?.id || 'click-outside'
      Vue.directive(id, directive)
    },
  }
}
