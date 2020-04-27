<template>
  <header id="header">
    <!-- Nav -->
    <div
      id="nav"
      :class="{ 'shadow-active': isAsideNavOpen }"
      @click="navClickHandler"
    >
      <!-- Main Nav -->
      <div id="nav-fixed">
        <div class="container">
          <!-- logo -->
          <div class="nav-logo">
            <nuxt-link to="/" class="logo"
              ><img src="/legacy/logo.png" alt=""
            /></nuxt-link>
          </div>
          <!-- /logo -->

          <AppNavigation />

          <AppSearch />
        </div>
      </div>
      <!-- /Main Nav -->

      <!-- Aside Nav -->
      <div id="nav-aside" :class="{ active: isAsideNavOpen }">
        <!-- nav -->
        <div class="section-row">
          <ul class="nav-aside-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="contact.html">Contacts</a></li>
          </ul>
        </div>
        <!-- /nav -->

        <!-- widget posts -->
        <div class="section-row">
          <h3>Recent Posts</h3>
          <div class="post post-widget">
            <a class="post-img" href="blog-post.html"
              ><img src="/legacy/widget-2.jpg" alt=""
            /></a>
            <div class="post-body">
              <h3 class="post-title">
                <a href="blog-post.html"
                  >Pagedraw UI Builder Turns Your Website Design Mockup Into
                  Code Automatically</a
                >
              </h3>
            </div>
          </div>

          <div class="post post-widget">
            <a class="post-img" href="blog-post.html"
              ><img src="/legacy/widget-3.jpg" alt=""
            /></a>
            <div class="post-body">
              <h3 class="post-title">
                <a href="blog-post.html"
                  >Why Node.js Is The Coolest Kid On The Backend Development
                  Block!</a
                >
              </h3>
            </div>
          </div>

          <div class="post post-widget">
            <a class="post-img" href="blog-post.html"
              ><img src="/legacy/widget-4.jpg" alt=""
            /></a>
            <div class="post-body">
              <h3 class="post-title">
                <a href="blog-post.html"
                  >Tell-A-Tool: Guide To Web Design And Development Tools</a
                >
              </h3>
            </div>
          </div>
        </div>
        <!-- /widget posts -->

        <!-- social links -->
        <div class="section-row">
          <h3>Follow us</h3>
          <ul class="nav-aside-social">
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
        <!-- /social links -->

        <!-- aside nav close -->
        <button class="nav-aside-close" @click="closeAsideNav">
          <i class="fa fa-times"></i>
        </button>
        <!-- /aside nav close -->
      </div>
      <!-- Aside Nav -->
    </div>
    <!-- /Nav -->
  </header>
</template>

<script>
import AppNavigation from '@/components/main/partials/Navigation'
import AppSearch from '@/components/main/partials/Search'

export default {
  name: 'Header',
  components: {
    AppNavigation,
    AppSearch
  },
  data: () => ({
    isAsideNavOpen: false
  }),

  methods: {
    navClickHandler(event) {
      if (!event.target.closest('#nav-aside')) {
        if (this.isAsideNavOpen === true) {
          this.closeAsideNav()
        } else if (event.target.closest('.aside-btn')) {
          this.openAsideNav()
        }
      }
    },
    openAsideNav() {
      this.isAsideNavOpen = true
    },
    closeAsideNav() {
      this.isAsideNavOpen = false
    }
  }
}
</script>
