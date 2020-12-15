<template>
  <div>
    <section v-scroll-reveal.reset="{ delay: 100 }">
    <a id="producto">
    <b-container>
      <b-row>
        <b-col>
          <carousel :perPage="test()" style="margin-top:90px">
            <slide class="p-1" v-for="datos in documents" :key="datos['.key']">
              <b-card
                :img-src="datos.url"
                img-alt="Image"
                img-top
                tag="article"
                img-width="0px"
                img-height="350px"
                style="max-width: 100%; height:500px"
                
              >
                <b-card-title style="text-align:center;">{{datos.text}}</b-card-title>
                <b-card-text style="text-align:center;">{{datos.detalles}}</b-card-text>
                <b-button class="button" href="#" variant="secondary" style="  display: flex; justify-content: center;" @click="enviarCategoria(datos.text)">Ver más</b-button>
              </b-card>
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>
    </a>
    </section>
   


  </div>
</template>

<script>
import { db } from "../db";

export default {
  firebase: {
    documents: db.ref("panelCategoria/")
  },
  data() {
    return {
      slide: 0,
      sliding: null,

      documents: [],
      document: {},

      cantidadImg: 2
    };
  },
  methods: {
    enviarCategoria(categoria){
      this.$router.push({ path: '/productos/'+categoria })
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    test() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
          return 1
        // alert("efe")
      } else {
        //alert("pc")
        return 3
      }
    }
  }
};
</script>

<style>
.row {
  margin-top: 100px;
}
.button{
    height:40px; 
    width:100px; 
    margin: -20px -50px; 
    position:relative;
    top:0%; 
    left:0%;
}
</style>