<template>
  <div>
    <b-container style="text-align:center;">
      <b-form-select class="test" v-model="selected" :options="documents" style=" width:80%"></b-form-select>

      <b-button
        variant="success"
        @click="seleccionar()"
        style="margin-left:10px;margin-top:-25px"
      >Filtrar</b-button>
      <div v-if="productosByCategoria.length >0">
        <b-row style="margin-top:10px">
          <b-col cols="12" md="4" v-for="datos in productosByCategoria" :key="datos['.key']">
            <b-card

              :title="datos.producto"
              :img-src="datos.url"
              tag="article"
              img-height="370px"
              style="max-width: 100%; height:570px; text-align:center; margin-top:10px;"
              class="mb-2; cursor"
              @click="verImg(datos.url, datos.producto)"
              v-b-modal.modal-1
            >
              <b-card-text>{{datos.detalles}}</b-card-text>
              <b-button href="#" variant="primary">Solicitar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-else>
        <h1
          style="margin-top:50px;"
        >Lo sentimos pero no encontramos el producto solicitado, comunicate con nosotros para mas ayuda!</h1>
        <img style=" max-width: 100%; margin-bottom: 40px;" src="/sinStock.png" />
      </div>
<div>
<b-modal id="modal-1" :title="producto" ><img :src="vista" style="max-width: 100%; height:570px; "></b-modal>
</div>

    </b-container>
    <footerfinal />
  </div>
</template>

<script>
import { db } from "../db";
import Footerfinal from "./Footerfinal.vue";

export default {
  props: ["categoriaId"],
  components: { Footerfinal },
  data() {
    return {
      selected: null,
      productosdb: [],
      documents: [],
      productosByCategoria: [],
      vista:"",
      producto:"",
    };
  },
  methods: {
    seleccionar: function () {
      this.$router.push({ path: "/productos/" + this.selected });
    },
    verImg:function(img, prod){
      this.vista = img;
      this.producto = prod;
    }
  },
  firebase: {
    productosdb: db.ref("productosdb/"),
    documents: db.ref("panelCategoria/"),
  },
  // created() {
  //   window.console.log(this.productosdb);
  //   window.console.log(this.categoriaId);
  //   this.productosByCategoria = this.productosdb.filter(
  //     x => x.categoriaNombre == this.categoriaId
  //   );
  // },
  watch: {
    categoriaId(newValue) {
      //window.console.log(this.productosdb);
      if (newValue) {
        this.productosByCategoria = this.productosdb.filter(
          (x) => x.categoriaNombre == this.categoriaId
        );
      } else {
        this.productosByCategoria = this.productosdb;
      }
    },
    productosdb(newValue) {
      //window.console.log(this.productosdb);
      if (newValue) {
        this.productosByCategoria = this.productosdb.filter(
          (x) => x.categoriaNombre == this.categoriaId
        );
      } else {
        this.productosByCategoria = this.productosdb;
      }
    },
  },
};
</script>
<style >
.cursor{
  cursor: pointer;
}


</style>