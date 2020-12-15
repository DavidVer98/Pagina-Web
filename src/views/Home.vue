<template>
  <div>
    <carousel />
    <jumbotron />
    <Parallax />
    <mensaje />
    <contacto />
    <scroll-up />
    <botonflotante />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Parallax from "../components/Parallax.vue";
import jumbotron from "../components/jumbotron.vue";
import mensaje from "../components/mensaje.vue";
import contacto from "../components/contactos.vue";
import ScrollUp from "../components/ScrollUp.vue";
import botonflotante from "../components/botonflotante.vue"
export default {
  components: {
    Carousel,
    Parallax,
    jumbotron,
    mensaje,
    contacto,
    ScrollUp,
    botonflotante
  },
  props:["paso"]
}
</script>

<style lang="scss" scoped>
</style>