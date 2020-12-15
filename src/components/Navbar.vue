<template>
  <div>
    <div v-if="test()">
      <b-navbar toggleable type="dark" variant="dark">
        <img src="/logo/logoo.png" style="width:40px" />
        <b-navbar-brand href="#">
          <router-link to="/">Inicio</router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-button
          class="my-2 my-sm-0"
          variant="danger"
          v-if="$store.state.islogin"
          @click="cerrarsesion()"
        >Cerrar Sesión</b-button>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/login">Iniciar Sesión</router-link>
            </b-nav-item>
            <b-nav-item href="#producto">Productos</b-nav-item>
            <b-nav-item href="#contacto">Contactos</b-nav-item>
            <b-nav-item v-if="$store.state.islogin">
              <router-link to="/añadirproductos">Añadir Productos</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div v-else>
      <b-navbar type="dark" variant="dark">
        <img src="/logo/logoo.png" style="width:40px" />
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/">Inicio</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{path: '/', hash:'#producto'}">| Productos</router-link>
               </b-nav-item>
               <b-nav-item>
            <router-link :to="{path: '/', hash:'#contacto'}">| Contactos</router-link>
          </b-nav-item>
         

          <!-- Navbar dropdowns -->

          <b-nav-item-dropdown text="| User" right style="margin-left:10px">
            <b-dropdown-item href="#">
              <router-link to="/login">Iniciar Sesión</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-if="$store.state.islogin">
            <router-link to="/añadirproductos">Añadir Productos</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button
            class="my-2 my-sm-0"
            variant="danger"
            v-if="$store.state.islogin"
            @click="cerrarsesion()"
          >Cerrar Sesión</b-button>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paso: false
    };
  },
  methods: {
    cerrarsesion() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    islogin() {
      return JSON.parse(window.localStorage.getItem("authenticate"));
    },
    test() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>