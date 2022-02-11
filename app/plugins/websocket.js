export default ({ app, store }, inject) => {
  if (process.server) {
    return
  }

  const { io } = require('socket.io-client')
  const websocket = io(app.$config.wsUrl)
  inject('websocket', websocket)
}
