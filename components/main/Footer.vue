<template>
  <!-- Footer -->
  <footer id="footer">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="col-md-5">
          <div class="footer-widget">
            <div class="footer-logo">
              <nuxt-link to="/"><img src="/legacy/logo.svg" alt=""/></nuxt-link>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="row">
            <div class="col-md-6">
              <div class="footer-widget">
                <h3 class="footer-title">About Us</h3>
                <ul class="footer-links">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="#">Join Us</a></li>
                  <li><a href="contact.html">Contacts</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="footer-widget">
                <h3 class="footer-title">Categories</h3>
                <ul class="footer-links">
                  <li><nuxt-link to="/">Home</nuxt-link></li>
                  <li><nuxt-link to="/popular">Popular</nuxt-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="footer-widget">
            <h3 class="footer-title">Join our Newsletter</h3>
            <div class="footer-newsletter">
              <form>
                <input
                  class="input"
                  type="email"
                  name="newsletter"
                  placeholder="Enter your email"
                />
                <button class="newsletter-btn">
                  <i class="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <ul class="footer-social">
              <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-google-plus"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </footer>
  <!-- /Footer -->
</template>
