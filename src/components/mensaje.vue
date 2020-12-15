<template>
  <div class="fondo">
    <section class="section section-dark" style="margin-top:-32px">
      <h2 style="text-align:center">¿Por qué elegirnos?</h2>
      <!--<p>Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Ab, corrupti.</p>-->
    </section>
    <b-container>
        <section v-scroll-reveal.reset="{ delay: 250 }">
      <div class="mt-4">
        <b-card
          style="opacity:0.7"
          img-src="/durableTest.png"
          img-alt="Card image"
          img-left
          class="mb-3"
          bg-variant="light"
          text-variant="black"
        >
          <b-card-text style="text-align:center">
            <h4 class="text-muted titulos">Procesos de Fabricación</h4>Tenemos los mejores procesos de fabricación
          </b-card-text>
        </b-card>
        <b-card
          style="opacity:0.7"
          img-src="/calidadTest.png"
          img-alt="Card image"
          img-right
          bg-variant="light"
          text-variant="black"
        >
          <b-card-text style="text-align:center">
            <h4 class="text-muted titulos">Calidad</h4>Cada producto esta elaborado con los mejores materiales
          </b-card-text>
        </b-card>
      </div>
      <br />
        </section>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap");
.fondo {
  background-image: url("/bannerInfo.jpg");
}
.titulos {
  font-family: "MuseoModerno", cursive;
}
</style>