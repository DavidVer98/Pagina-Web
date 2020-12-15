<template>
    <div>
        <b-container>
        <h1 class="titulo">Categoria: {{categoria}}</h1>
        </b-container>
            <vista-productos :categoriaId = "categoria" />
    </div>
</template>

<script>
import VistaProductos from "../components/VistaProductos.vue";
    export default {
        components:{
            VistaProductos
        },
        props:['categoria']
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
.titulo{
    font-family: 'Lato', sans-serif;
    text-align: center;
    margin-top:50px;
}
</style>