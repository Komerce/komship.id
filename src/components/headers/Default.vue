<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          :src="require('@/assets/img/logo/komship-logo.png')"
          class="image-navbar"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img :src="require('@/assets/img/icons/toggler-icon.png')" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse nav-menu">
        <div class="close-toggler">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Close"
          >
            <img :src="require('@/assets/img/icons/close-icon.png')" />
          </button>
        </div>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="menuHome" class="nav-link" @click="goto('home')">Beranda</a>
          </li>
          <li class="nav-item">
            <a id="menuService" class="nav-link" @click="goto('service')"
              >Layanan</a
            >
          </li>
          <li class="nav-item">
            <a id="menuFeature" class="nav-link" @click="goto('feature')"
              >Fitur</a
            >
          </li>
        </ul>
        <button
          class="btn btn-outline-primary btn-sign-in"
          @click="openWindow('https://partner.komerce.id/')"
        >
          Masuk
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    goto(id) {
      if (this.$route.path !== "/") {
        this.$router.push("/");
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
      if (this.$route.path == "/") {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
    },
    openWindow(url) {
      window.open(url);
    },
  },
};
</script>
<style>
.navbar {
  background-color: #f6f6f9;
  max-height: 80px;
}
.btn-sign-in {
  width: 151px;
  height: 56px;
  margin: auto 5vw;
}
.nav-item {
  padding-left: 2.5vw;
}
/* .nav-item .router-link-exact-active:before {
  content: "";
  position: absolute;
  bottom: 10px;
  width: 30px;
  border-bottom: 2px solid #f95031;
} */
.nav-item .active {
  color: #f95031 !important;
}
.nav-item .active:before {
  content: "";
  position: absolute;
  bottom: 10px;
  width: 30px;
  border-bottom: 2px solid #f95031;
}
.navbar-toggler {
  border-color: #f95031 !important;
  box-shadow: unset !important;
  margin-right: 2.5vw;
}
.close-toggler {
  display: none;
}
@media only screen and (max-width: 991px) {
  .close-toggler {
    display: flex;
    float: right;
  }
  .nav-menu {
    background-color: #f95031;
    top: 0;
    left: 0;
    padding: 5vw;
    position: absolute;
    display: block;
    width: 100%;
    z-index: 9;
  }
  .navbar-nav {
    margin-top: 3vw;
  }
  .nav-item a {
    color: #ffffff !important;
    font-weight: 600 !important;
    margin-bottom: 1vw;
  }
  .nav-item .active {
    color: #ffffff !important;
    font-weight: 700;
  }
  .btn-sign-in {
    display: none !important;
  }
}
@media only screen and (max-width: 540px) {
  .navbar-brand img {
    width: 135px;
  }
}
</style>
