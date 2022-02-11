<template>
  <v-app-container>
    <h1 class="font-body font-bold text-2xl text-gray-800">Home</h1>

    <nav class="py-6 flex space-x-3">
      <nuxt-link
        :to="localePath('stream')"
        class="font-body font-semibold text-base text-blue-500 hover:underline"
      >
        Stream
      </nuxt-link>

      <nuxt-link
        :to="localePath('live')"
        class="font-body font-semibold text-base text-blue-500 hover:underline"
      >
        Live
      </nuxt-link>
    </nav>
  </v-app-container>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    this.$socket.on('welcome', this.onWelcome)
    this.$socket.emit('hello', 'Alejandro')
  },
  methods: {
    onWelcome(message) {
      console.log('Welcome: ', message)
    },
  },
}
</script>


