<template>
  <main>
  <!-- Header Banner -->
      <div class="banner-header middle-height section-padding valign bg-img bg-imgfixed" data-overlay-dark="7" data-background="/img/banner.jpg">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 text-center">
                      <h3>Contáctanos</h3>
                  </div>
              </div>
          </div>
      </div>
      <!-- Contact Box -->
      <div class="contact-box">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-6 animate-box" data-animate-effect="fadeInUp">
                      <div class="item"> <span class="icon fa-thin fa-envelope"></span>
                          <h5>Escríbenos</h5>
                          <p>contacto@souingenieria.cl</p> <i class="numb fa-solid fa-envelope"></i>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 animate-box" data-animate-effect="fadeInUp">
                      <div class="item"> <span class="icon fa-thin fa-location-dot"></span>
                          <h5>Estamos en</h5>
                          <p>Puerto Montt</p> <i class="numb fa-solid fa-location-dot"></i>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 animate-box" data-animate-effect="fadeInUp">
                      <div class="item active"> <span class="icon fa-thin fa-phone"></span>
                          <h5>Llámanos</h5>
                          <p>+56 9 9782 9016</p> <i class="numb fa-solid fa-phone"></i>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Contact -->
      <div class="info-box section-padding">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-7">
                      <div class="section-title mb-30 text-center">Conversemos</div>
                      <div class="contact-form">
                          <form method="post">
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="form-group"> <span class="form-icon"><i class="fa-light fa-face-smile"></i></span>
                                          <input type="text" name="name" id="name" placeholder="Nombre" required="">
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group"> <span class="form-icon"><i class="fa-light fa-envelope"></i></span>
                                          <input type="email" name="email" id="email" placeholder="Correo electrónico" required="">
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="form-group"> <span class="form-icon"><i class="fa-light fa-book"></i></span>
                                          <input type="text" name="subject" id="subject" placeholder="Asunto" required="">
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="form-group form-textarea"> <span class="form-icon"><i class="fa-light fa-comment"></i></span>
                                          <textarea name="message" id="message" cols="30" rows="3" placeholder="Mensaje" required=""></textarea>
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <button class="durubtn"><span class="text-wrapper"><span class="text slide-up">Enviar mensaje</span><span class="text slide-down">Enviar mensaje</span></span></button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>
