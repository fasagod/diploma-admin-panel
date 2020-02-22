<template>
<div v-if="this.auth==true">
  <div id="app">
    <div id="nav">
      <NavigationBar/>
    </div>
    <router-view/>
  </div>
</div>
<div v-else>
<Login/>
</div>
</template>

<script lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import Login from './components/Login.vue';


import Vue from 'vue'
import {Component} from 'vue-property-decorator';
@Component({
  components:{NavigationBar,Login}
})
export default class App extends Vue{
  data() {
    return {
      auth: true,
    };
  }
}
</script>

<style>
body{
      display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
