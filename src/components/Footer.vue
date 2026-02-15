<template>
  <footer class="footer">
    <div
      class="background banner-img bg-img bg-imgfixed bg-position-top"
      data-background="/img/banner.jpg"
      data-overlay-dark="7"
    >
      <div class="container">
        <div class="top">
          <div class="row align-items-center">
            <div class="col-md-4">
              <div class="item">
                <div class="logo mb-30">
                  <img src="/img/logo-dark.svg" alt="" />
                </div>
                <p class="mb-15">
                  SOU Ingeniería e Inspección SpA
                  <br />Ingeniería estructural, inspección de obras y asesorías Sur de Chile
                </p>
                <div class="social-icons mb-30">
                  <ul class="list-inline">
                    <li>
                      <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-x-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="item text-end-left">
                <h3 class="mb-30">Hablemos</h3>
                <p class="mb-5">Puerto Montt</p>
                <div class="phone mb-5">
                  <a href="tel:+56997829016">+56 9 9782 9016</a>
                </div>
                <div class="mail">
                  <a href="mailto:contacto@souingenieria.cl">contacto@souingenieria.cl</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="links">
                <ul>
                  <li><RouterLink to="/">Inicio</RouterLink></li>
                  <li><RouterLink to="/nosotros">Nosotros</RouterLink></li>
                  <li><RouterLink to="/servicios">Servicios</RouterLink></li>
                  <li><RouterLink to="/proyectos">Proyectos</RouterLink></li>
                  <li><RouterLink to="/contacto">Contacto</RouterLink></li>
                  <li><RouterLink to="/zona-sismica">Zona Sísmica</RouterLink></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 text-end">
              <p>Copyright 2026 by SOU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
