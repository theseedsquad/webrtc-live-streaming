<template>
  <v-app-container>
    <video ref="video" muted autoplay />
  </v-app-container>
</template>

<script>
import WebRTCMixin from '@/mixins/webrtc.js'
export default {
  name: 'StreamPage',
  mixins: [WebRTCMixin],
  async mounted() {
    this.stream = await this.getUserMedia()
    this.stream.getTracks().forEach((track) => {
      this.tracks.push(track)
    })

    this.$nextTick(() => {
      this.$refs.video.srcObject = this.stream
    })

    const id = 'alejandro'
    this.$socket.emit('createLive', id)

    this.$socket.on('candidate', async (socketId, candidate) => {
      await this.connections[socketId].addIceCandidate(candidate)
    })

    this.$socket.on('offer', async (socketId, offer) => {
      const connection = this.createPeerConnection((candidate) => {
        this.$socket.emit('candidate', socketId, candidate)
      })

      this.connections[socketId] = connection

      for (const track of this.tracks) {
        connection.addTrack(track, this.stream)
      }

      const remoteDescription = new RTCSessionDescription(offer)
      await connection.setRemoteDescription(remoteDescription)

      const localDescription = await connection.createAnswer()
      await connection.setLocalDescription(localDescription)

      this.$socket.emit('answer', socketId, localDescription)
    })
  },
}
</script>


