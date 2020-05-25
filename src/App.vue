<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
body {
  margin: 0;
}
.root {
  width: 100%;
  height: 100%;
  background-image: url(~assets/timg.png);
  background-repeat: repeat-y;
  background-size: 100% ;
  color: white;
}
</style>
