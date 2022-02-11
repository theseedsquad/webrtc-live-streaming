export default ({ app, store }, inject) => {
  if (process.server) {
    return
  }

  const { io } = require('socket.io-client')
  const socket = io(app.$config.wsUrl)
  inject('socket', socket)
}
