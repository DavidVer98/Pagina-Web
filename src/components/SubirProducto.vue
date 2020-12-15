<template>
  <div>
    <carousel :perPage="test()">
      <slide class="p-2" v-for="datos in productosdb.slice().reverse()" :key="datos['.key']">
        <b-card
          :img-src="datos.url"
          img-alt="Image"
          img-top
          tag="article"
          img-width="0px"
          img-height=65%
          style="max-width: 100%; height:100%"
        >
          <slot>
            <h5>Producto : {{datos.producto}}</h5>
          </slot>
          <b-card-title
            style="text-align:left;"
            class="text-muted"
          >Categoría: {{datos.categoriaNombre}}</b-card-title>
          <b-card-text>{{datos.detalles}}</b-card-text>
          <b-button variant="danger" href="#" @click="removeProducto(datos['.key'])">Borrar</b-button>
        </b-card>
      </slide>
    </carousel>
    <form style="margin-top:50px;  ;border-radius: 20px;border: 2px solid #C0C0C0; padding: 20px;">
      <label>Categoria:</label>
      <br />
      <b-form-select style="width:100%" class="test" v-model="productos.categoriaNombre" :options="documents"></b-form-select>
      <br />
      <label>Producto:</label>
      <br />
      <input style="width:100%" type="text" v-model="productos.producto" placeholder=" Ej: Oficina" />
      <br />
      <label>Detalles:</label>
      <br />
      <input style="width:100%" type="text" v-model="productos.detalles" placeholder=" Ej: Detalles Varios" />
      <br />
      <label>Url:</label>
      <br />
      <input style="width:100%" type="text" v-model="productos.url" disabled />
    </form>

    <br />
    <div>
      <p>Subir Imagen:</p>
      <input type="file"  @change="previewImage" accept="image/*" />
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

  </div>
</template>

<script>
import { db } from "../db";
import firebase from "firebase";

export default {

  data() {
    return {
      productos: {},
      productosdb: [],

      documents: [],

      imageData: null,
      picture: null,
      uploadValue: 0,
      direccion: ""
    };
  },
  firebase: {
    productosdb: db.ref("productosdb/"),
    documents: db.ref("panelCategoria/")
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
    submitProducto() {
      db.ref("productosdb").push(this.productos);
    },
    removeProducto(key) {
      db.ref("productosdb/")
        .child(key)
        .remove();
    },
    submitName() {
      db.ref("productosdb/").push(this.productos);
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
            this.productos.url = this.direccion;
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