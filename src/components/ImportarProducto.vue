<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h1>Subir Categoría  <b-icon  icon="folder-symlink"></b-icon></h1>
          <br />
          <carousel :perPage="test()">
            <slide class="p-2" v-for="datos in documents.slice().reverse()" :key="datos['.key']">
              <b-card
                :title="datos.producto"
                :img-src="datos.url"
                img-alt="Image"
                img-top
                tag="article"
                           img-width="0px"
                img-height="350px"
                style="max-width: 100%; height:500px"
              >
                <b-card-title style="text-align:center;">{{datos.text}}</b-card-title>
                <b-card-text>{{datos.detalles}}</b-card-text>
                <b-button variant="danger" href="#" @click="remove(datos['.key'])">Borrar</b-button>
              </b-card>
            </slide>
          </carousel>
        </b-col>
      </b-row>
      <form style="margin-top:50px;  ;border-radius: 20px;border: 2px solid #C0C0C0; padding: 20px;">
        
        <label>Categoria:</label>
        <br />
        <input  style="width:100%" type="text" v-model="document.text" placeholder=" Ej: Oficina" />
        <br />
        <label>Detalles:</label>
        <br />
        <input style="width:100%" type="text" v-model="document.detalles" placeholder=" Ej: Detalles Varios" />
        <br />
        <label>Url:</label>
        <br />
        <input style="width:100%" type="text" v-model="document.url" disabled />
      </form>

      <br />
      <div>
        <p>Subir Imagen:</p>
        <input type="file" @change="previewImage" accept="image/*" />
      </div>
      <div>
        <p>
          Progress: {{uploadValue.toFixed()+"%"}}
          <b-progress
            id="progress"
            :value="uploadValue"
            max="100"
            show-progress
            animated
            style="width:85%"
          ></b-progress>
        </p>
      </div>
      <div v-if="imageData!=null">
        <!-- <img class="preview" :src="picture" /> -->
        <br />
        <b-button variant="outline-primary" @click="onUpload">Cargar Imagen</b-button>
      </div>
      <b-button variant="primary" @click="submitName()">Subir</b-button>
      <br />
      <hr />
      <h1>Subir Producto <b-icon  icon="minecart"></b-icon></h1>
        <subir-producto  />
    </b-container >
        <footerfinal style="margin-top:50px" />
  </div>
</template>

<script>
import { db } from "../db";
import firebase from "firebase";
import SubirProducto from "./SubirProducto.vue";
import footerfinal from "./Footerfinal";

export default {
  components: {SubirProducto, footerfinal},
  data() {
    return {
      slide: 0,
      sliding: null,

      documents: [],
      document: {},

      imageData: null,
      picture: null,
      uploadValue: 0,
      direccion: ""
    };
  },
  firebase: {
    documents: db.ref("panelCategoria/"),
  },
  methods: {
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
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    //------FB-----------
    submitName() {
      this.document.value = this.document.text;
      db.ref("panelCategoria").push(this.document);
    },
    remove(key) {
      db.ref("panelCategoria/")
        .child(key)
        .remove();
    },
    //----------------------UPLOAD IMAGE--------------
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            this.direccion = url;
            this.document.url = this.direccion;
          });
        }
      );
    }
  }
};
</script>

<style>

.row {
  margin-top: 100px;
}
.test {
  width: 85%;

  background: #f8f8f8;
  border: 1px solid rgba(0, 0, 0, 0.075);
  margin-bottom: 25px;
  color: #727272 !important;
  font-size: 15px;
  text-align: center;
}
</style>