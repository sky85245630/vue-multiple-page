<template>

  <div id="app">
  <HEADER msg="HEADER message"/>

    <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FOOTER/>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HEADER from './components/header.vue'
import FOOTER from './components/footer.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    HEADER,
    FOOTER
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
