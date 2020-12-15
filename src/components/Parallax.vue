<template>
  <div class="parallax" style="margin-top:-100px">
   
      <categoria-producto />
 
  </div>
</template>

<script>
import CategoriaProducto from "./CategoriaProducto.vue"
export default {
  components:{
    CategoriaProducto
  }
};
</script>

<style>
.parallax {
  /* The image used */
  background-image: url("/backgraund1.jpg");
  background-color: black;

  /* Set a specific height */
  height: 800px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>