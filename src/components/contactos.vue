<template>
  <div>
    <a id="contacto"> 
    <section class="section section-dark" style="margin-top:0px">
      <h2 style="text-align:center">Contactos</h2>
      <!--<p>Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Ab, corrupti.</p>-->
    </section>

    <b-container style="margin-top:100px">
      <section v-scroll-reveal.reset="{ delay: 250 }">
      <h1>ENVÍANOS CUALQUIER CONSULTA</h1>
      <div class="inner contact">
        <!-- Form Area -->
        <div class="contact-form">
          <!-- Form -->
          <form id="contact-us" action="https://formspree.io/mlepwalz" method="POST">
            <!-- Left Inputs -->
            <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
              <!-- Name -->
              <input
                type="text1"
                name="name"
                id="name"
                required="required"
                class="form"
                placeholder="Nombre"
              />
              <!-- Email -->
              <input
                type="email"
                name="mail"
                id="mail"
                required="required"
                class="form"
                placeholder="Email"
              />
              <!-- Subject -->
              <input
                type="text1"
                name="asunto"
                id="subject"
                required="required"
                class="form"
                placeholder="Asunto"
              />
            </div>
            <!-- End Left Inputs -->
            <!-- Right Inputs -->
            <div class="col-xs-6 wow animated slideInRight" data-wow-delay=".5s">
              <!-- Message -->
              <textarea name="message" id="message" class="form textarea" placeholder="Mensaje"></textarea>
            </div>
            <!-- End Right Inputs -->
            <!-- Bottom Submit -->
            <div class="relative fullwidth col-xs-12">
              <!-- Send Button -->
              <button
                type="submit"
                class="form-btn semibold"
              >Enviar Mensaje</button>
            </div>
            <!-- End Bottom Submit -->
            <!-- Clear -->
            <div class="clear"></div>
          </form>

          <!-- Your Mail Message -->
          <div class="mail-message-area">
            <!-- Message -->
            <div class="alert gray-bg mail-message not-visible-message">
              <strong>Thank You !</strong> Your email has been delivered.
            </div>
          </div>
        </div>
        <!-- End Contact Form Area -->
      </div>
      <!-- End Inner -->
      </section>
    </b-container>

    <b-container>
      <section v-scroll-reveal.reset="{ delay: 250 }">
      <p align="center">
        <iframe
        class="col-lg-12 col-md-12 col-sm-12"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14429.899931822269!2d-57.582209!3d-25.288241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb42cc975f36d0c8!2sIndustrias%20Ybycu-i%20SRL!5e0!3m2!1sen!2sus!4v1590791667099!5m2!1sen!2sus"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </p>
      </section>
    </b-container>

    <b-container style="margin-top:50px">
      <hr />
      <b-row style="text-align:center">
        <b-col md="4">
          <b-icon icon="map" font-scale="4"></b-icon>
          <h6 style="text-muted text-align:center">DIRECCIÓN</h6>
          <a href="https://www.google.com/maps?ll=-25.288241,-57.582209&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=16952336897885524168">Gral Eugenio Alejandrino Garay 571, Asunción, Paraguay</a>
        </b-col>
        <hr class="vertical-line" />
        <b-col ms="3">
          <b-icon icon="phone" font-scale="4"></b-icon>
          <h6 style="text-muted text-align:center">TELEFONO</h6>
          <p>(595) 21 600 642</p>
        </b-col>
        <hr class="vertical-line" />
        <b-col ms="2">
          <b-icon icon="envelope-open" font-scale="4"></b-icon>
          <h6 style="text-muted text-align:center">CORREO</h6>
          <em style="font-size:14px">Ventas@ybycui.com.py</em>
        </b-col>
        <hr class="vertical-line" />
        <b-col ms="3">
          <b-icon icon="chat-square-dots" font-scale="4"></b-icon>
          <h6 style="text-muted text-align:center">REDES SOCIALES</h6>
          <a href="https://www.facebook.com/industriasybycui/">Facebook</a>
          <br />
          <a>Twitter</a>
        </b-col>
      </b-row>
    </b-container>
    </a>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.section {
  text-align: center;
  padding: 10px 80px;
}
.section-light {
  background-color: #a84242;
  color: #ddd;
}
.section-dark {
  background-color: #282e34;
  color: #ddd;
}

.vertical-line {
  border: none;
  border-left: 1px outset;
  height: 15vh;
  width: 1px;
}

#contact {
  padding: 10px 0 10px;
}

.contact-text {
  margin: 45px auto;
}

.mail-message-area {
  width: 100%;
  padding: 0 15px;
}

.mail-message {
  width: 100%;
  background: rgba(255, 255, 255, 0.8) !important;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  transition: all 0.7s;
  margin: 0 auto;
  border-radius: 0;
}

.not-visible-message {
  height: 0px;
  opacity: 0;
}

.visible-message {
  height: auto;
  opacity: 1;
  margin: 25px auto 0;
}

/* Input Styles */

.form {
  width: 100%;
  padding: 15px;
  background: #f8f8f8;
  border: 1px solid rgba(0, 0, 0, 0.075);
  margin-bottom: 25px;
  color: #727272 !important;
  font-size: 13px;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.form:hover {
  border: 1px solid #8bc3a3;
}

.form:focus {
  color: white;
  outline: none;
  border: 1px solid #8bc3a3;
}

.textarea {
  height: 200px;
  max-height: 200px;
  max-width: 100%;
}

/* Generic Button Styles */

.button {
  padding: 8px 12px;
  background: #0a5175;
  display: block;
  width: 120px;
  margin: 10px 0 0px 0;
  border-radius: 3px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  font-size: 0.8em;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.button:hover {
  background: #8bc3a3;
  color: white;
}

/* Send Button Styles */

.form-btn {
  width: 180px;
  display: block;
  height: auto;
  padding: 15px;
  color: #fff;
  background: #8bc3a3;
  border: none;
  border-radius: 3px;
  outline: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin: auto;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.form-btn:hover {
  background: #111;
  color: white;
  border: none;
}

.form-btn:active {
  opacity: 0.9;
}
center {
  margin-top: 330px;
}
input {
  position: relative;
  z-index: 9999;
}
</style>