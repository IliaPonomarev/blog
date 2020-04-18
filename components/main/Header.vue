<template>
<<<<<<< HEAD
  <header class="header-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 d-flex">
          <a href="index.html" class="site-logo">
            Meranda
          </a>

          <a
            href="#"
            class="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
            ><span class="icon-menu h3"></span
          ></a>
        </div>
        <div class="col-12 col-lg-6 ml-auto d-flex">
          <div class="ml-md-auto top-social d-none d-lg-inline-block">
            <a href="#" class="d-inline-block p-3"
              ><span class="icon-facebook"></span
            ></a>
            <a href="#" class="d-inline-block p-3"
              ><span class="icon-twitter"></span
            ></a>
            <a href="#" class="d-inline-block p-3"
              ><span class="icon-instagram"></span
            ></a>
          </div>
          <form action="#" class="search-form d-inline-block">
            <div class="d-flex">
              <input
                type="email"
                class="form-control"
                placeholder="Search..."
              />
              <button type="submit" class="btn btn-secondary">
                <span class="icon-search"></span>
              </button>
            </div>
          </form>
        </div>
        <div class="col-6 d-block d-lg-none text-right"></div>
      </div>
    </div>

    <div
      class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
      role="banner"
    >
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="mr-auto">
            <nav
              class="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul
                class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block"
              >
                <li class="active">
                  <a href="index.html" class="nav-link text-left">Home</a>
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left"
                    >Categories</a
                  >
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left"
                    >Politics</a
                  >
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left"
                    >Business</a
                  >
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left"
                    >Health</a
                  >
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left"
                    >Design</a
                  >
                </li>
                <li>
                  <a href="categories.html" class="nav-link text-left">Sport</a>
                </li>
                <li>
                  <a href="contact.html" class="nav-link text-left">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
=======
  <header id="header">
    <!-- Nav -->
    <div id="nav">
      <!-- Main Nav -->
      <div id="nav-fixed">
        <div class="container">
          <!-- logo -->
          <div class="nav-logo">
            <a href="index.html" class="logo"
              ><img src="/legacy/logo.png" alt=""
            /></a>
          </div>
          <!-- /logo -->

          <!-- nav -->
          <ul class="nav-menu nav navbar-nav">
            <li><a href="category.html">News</a></li>
            <li><a href="category.html">Popular</a></li>
            <li class="cat-1"><a href="category.html">Web Design</a></li>
            <li class="cat-2"><a href="category.html">JavaScript</a></li>
            <li class="cat-3"><a href="category.html">Css</a></li>
            <li class="cat-4"><a href="category.html">Jquery</a></li>
          </ul>
          <!-- /nav -->

          <!-- search & aside toggle -->
          <div class="nav-btns">
            <button class="aside-btn"><i class="fa fa-bars"></i></button>
            <button class="search-btn"><i class="fa fa-search"></i></button>
            <div class="search-form">
              <input
                class="search-input"
                type="text"
                name="search"
                placeholder="Enter Your Search ..."
              />
              <button class="search-close"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /search & aside toggle -->
        </div>
      </div>
      <!-- /Main Nav -->

      <!-- Aside Nav -->
      <div id="nav-aside">
        <!-- nav -->
        <div class="section-row">
          <ul class="nav-aside-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Advertisement</a></li>
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
        <button class="nav-aside-close"><i class="fa fa-times"></i></button>
        <!-- /aside nav close -->
      </div>
      <!-- Aside Nav -->
    </div>
    <!-- /Nav -->
>>>>>>> custom-design
  </header>
</template>
