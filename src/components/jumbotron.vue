<template>
  <div>
    <section v-scroll-reveal.reset="{ delay: 250 }">
    <b-jumbotron style="text-align: center">
      <template v-slot:header>
        <img src="/logo/logoo.png" />
        <br />ZANELLA
      </template>

      <template v-slot:lead>Industria Metalúrgica liviana</template>
      <p>Desde 1973</p>
      <hr class="my-4" />
      <b-container v-if="test()">
        <h5>"UNA DE LAS PRIMERAS METALÚRGICAS DEL PAÍS"</h5>
        <b-row style="margin-top:30px">
          <b-col>
            <p class="parrafo">
              Don Juan Zanella dueño de la marca ZANELLA de motos argentina trae la empresa al Paraguay. Don Juan Zanella vende la marca al gerente en ese tiempo de la empresa y así nace en 1973 INDUSTRIAS YBYCUI SRL una metalúrgica liviana con los muebles ZANELLA de la mano de Don Hilario Cabañas Bazán Fundador y Dueño con la ayuda de su esposa Doña Carmen Yegros de Cabañas ,de sus hijos y de algunos empleados que hasta hoy en día forman parte de la empresa.
              Fecha de inicio de actividades 1 de septiembre de 1973 contando con 4 empleados y 18 obreros.
            </p>

            <p class="parrafo">
              Don Hilario Cabañas Bazán fue director y vendedor de la empresa por más de 40 años con otros socios.
              Hoy en día la empresa esta dirigida solamente por la familia del Fundador Hilario Cabañas.
              "MAS QUE UNA EMPRESA SOMOS UNA HISTORIA"
            </p>
            <h4 class="text-muted" style="text-aling:center">DIRECTORES</h4>
            <p style="text-aling:center">
              MILNER CABAÑAS YEGROS
              <br />NELSON CABAÑAS YEGROS
            </p>
          </b-col>
        </b-row>
      </b-container>
      <!--PC -->
      <b-container v-else>
        <h5>"UNA DE LAS PRIMERAS METALÚRGICAS DEL PAÍS"</h5>
        <b-row style="margin-top:30px">
          <b-col>
            <p class="parrafo">
              Don Juan Zanella, el dueño de la marca de motos Argentina ZANELLA, trae la empresa al Paraguay.<br>
              Don Juan Zanella vende la marca al gerente en ese momento de la empresa, y asi, en 1973 nace INDUSTRIAS YBYCUI SRL,<br>
              una metalurgica liviana con los muebles ZANELLA de la mano de Don Hilario Cabañas Bazan, Fundador y Dueño, con la ayuda de su esposa<br>
              Doña Carmen Yegros de Cabañas, de sus hijos y de algunos empleados, que siguen formando parte de la empresa hasta hoy. <br>
              Las actividades iniciaron el 1 de septiembre de 1973, contando con 4 empleados y 18 obreros al principio.
            </p>
          </b-col>
          <b-col>
            <p class="parrafo">
              Don Hilario Cabañas Bazán fue director y vendedor de la empresa por más de 40 años con otros socios.
              Hoy en día la empresa esta dirigida solamente por la familia del Fundador Hilario Cabañas.
              "MAS QUE UNA EMPRESA SOMOS UNA HISTORIA"
            </p>
            <h4 class="text-muted parrafo">DIRECTORES</h4>
            <p class="parrafo">
              MILNER CABAÑAS YEGROS
              <br />NELSON CABAÑAS YEGROS
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
    </section>

    <section class="section section-orange" style="margin-top:-32px">
      <h2>Productos</h2>
      <!--<p>Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Ab, corrupti.</p>-->
    </section>
  </div>
</template>

<script>
export default {
  methods: {
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

<style>
.parrafo {
  text-align: justify;
}
.section {
  text-align: center;
  padding: 10px 80px;
}
.section-light {
  background-color: #a84242;
  color: #ddd;
}
.section-orange {
  background-color: #d33715;
  color: #ddd;
}
</style>