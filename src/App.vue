<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sockets: {
        // https://github.com/MetinSeylan/Vue-Socket.io/blob/4322054bfd9af4a05a98c01aa2905ee264d2fede/src/listenler.js
        connect: function () {
          // alert('socket connected.')
          console.log('socket connected.')
        },
        disconnect: function () {
          alert('socket disconnected.')
        },
        reconnecting: function () {
          alert('socket reconnecting.')
        },
        connect_timeout: function () {
          alert('socket connect timeout.')
        },
        connect_error: function () {
          alert('socket connect error.')
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
