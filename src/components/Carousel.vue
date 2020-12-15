<template>
  <div>
    <div>
      <div v-if="test() === 1">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide caption img-src="banner1Mod2.jpg"></b-carousel-slide>
          <b-carousel-slide caption="INDUSTRIAS YBYCUI" img-src="banner2Mod.jpg"></b-carousel-slide>
        </b-carousel>
      </div>
      <header
        style="  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;"
        v-else
      >
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source :src="video" type="video/mp4" />
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">INDUSTRIAS YBYCUI</h1>
              <p class="lead mb-0">Detalles y diseño.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: "video/video1.mp4",
    };
  },
  methods: {
    test() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return 1;
        // alert("efe")
      } else {
        //alert("pc")
        return 2;
      }
    },
  },
};
</script>

<style scope>
.video-size {
  width: 100%;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
  header video {
    display: none;
  }
}
</style>