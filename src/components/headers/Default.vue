<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/img/logo/komship-logo.png')" class="image-navbar" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img :src="require('@/assets/img/icons/toggler-icon.png')" />
      </button>
      <div class="collapse navbar-collapse nav-menu" id="navbarNav">
        <div class="close-toggler">
          <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Close">
            <img :src="require('@/assets/img/icons/close-icon.png')" />
          </button>
        </div>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Beranda</router-link>
          </li>
          <li class="nav-item">
            <a href="#service" class="nav-link">Layanan</a>
          </li>
          <li class="nav-item">
            <a href="#feature" class="nav-link">Fitur</a>
          </li>
        </ul>
        <button class="btn btn-outline-primary btn-sign-in">Masuk</button>
      </div>
    </div>
  </nav>
</template>
<style>
.navbar{
  background-color: #F6F6F9;
}
.btn-sign-in{
  width: 151px;
  height: 56px;
  margin: auto 5vw;
}
.nav-item{
  padding-left: 2.5vw;
}
.nav-item .active{
  color: #F95031!important;
}
.nav-item .active:before {
  content : "";
  position: absolute;
  bottom: 10px;
  width: 30px;
  border-bottom: 2px solid #F95031;
}
.navbar-toggler{
  border-color: #F95031!important;
  box-shadow: unset!important;
  margin-right: 2.5vw;
}
.close-toggler{
  display: none;
}
@media only screen and (max-width: 991px){
  .close-toggler{
    display: flex;
    float: right;
  }
  .nav-menu{
    background-color: #F95031;
    top: 0;
    left: 0;
    padding: 5vw;
    position: absolute;
    display: block;
    width: 100%;
    z-index: 9;
  }
  .navbar-nav{
    margin-top: 3vw;
  }
  .nav-item a{
    color: #FFFFFF!important;
    font-weight: 600!important;
    margin-bottom: 1vw;
  }
  .nav-item .active{
    color: #FFFFFF!important;
    font-weight: 700;
  }
  .btn-sign-in{
    display: none !important;
  }
}
</style>