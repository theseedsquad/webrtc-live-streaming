export default {
  data() {
    return {
      stream: null,
      tracks: [],
      connections: {},
    }
  },
  methods: {
    getUserMedia() {
      const constraints = { audio: true, video: true }
      return navigator.mediaDevices.getUserMedia(constraints)
    },
    createPeerConnection(onCandidate) {
      const options = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }
      const connection = new RTCPeerConnection(options)

      connection.addEventListener('icecandidate', (event) => {
        if (event.candidate) {
          onCandidate(event.candidate)
        }
      })

      return connection
    },
  },
}
