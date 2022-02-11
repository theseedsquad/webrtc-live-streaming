import mitt from 'mitt'

const emitter = mitt()

export default (_, inject) => {
  inject('emitter', {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit,
  })
}
