<template>
  <v-app-container>
    <video ref="video" muted autoplay />
  </v-app-container>
</template>

<script>
import WebRTCMixin from '@/mixins/webrtc.js'
export default {
  name: 'LivePage',
  mixins: [WebRTCMixin],
  mounted() {
    const id = 'alejandro'

    this.$socket.on('answer', async (socketId, answer) => {
      const remoteDescription = new RTCSessionDescription(answer)
      await this.connections[socketId].setRemoteDescription(remoteDescription)
    })

    this.$socket.on('candidate', async (socketId, candidate) => {
      await this.connections[socketId].addIceCandidate(candidate)
    })

    this.$socket.emit('joinLive', id, async (socketId) => {
      const connection = this.createPeerConnection((candidate) => {
        this.$socket.emit('candidate', socketId, candidate)
      })

      this.connections[socketId] = connection

      connection.addEventListener('track', (event) => {
        const [remoteStream] = event.streams
        this.$refs.video.srcObject = remoteStream
      })

      const options = { offerToReceiveAudio: true, offerToReceiveVideo: true }
      const localDescription = await connection.createOffer(options)
      await connection.setLocalDescription(localDescription)

      this.$socket.emit('offer', socketId, localDescription)
    })
  },
}
</script>


