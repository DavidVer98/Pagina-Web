<template>
  <div id="app">
    <nav-bar :paso=false />
    <router-view/>
   <!-- <carousel />
    <jumbotron />
    <Parallax />
    <contacto />
    <scroll-up/>
    -->
   
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import navbar from "./components/Navbar.vue";


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components:{
     "nav-bar": navbar
  }
}
</script>

<style>
</style>
