<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <img
          :src="require('@/assets/img/logo/komship-logo.png')"
          class="image-navbar"
        />
      </div>
    </nav>
    <section class="error-404">
      <div class="container">
        <img
          :src="require('@/assets/img/partials/404.png')"
          class="image-error"
        />
        <h1 class="title-error">Whoops!</h1>
        <p class="desc-error">
          Maaf, kami tidak bisa menemukan halaman yang kamu cari.
        </p>
        <div class="backhome">
          <router-link to="/">
            <button class="btn-backhome">Kembali ke beranda</button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { useMeta } from "vue-meta";
export default {
  setup() {
    useMeta({
      title: "Halaman Tidak Ditemukan",
    });
  },
};
</script>
<style>
.image-navbar {
  margin-left: 5vw;
}
.error-404 {
  background-color: #f8f9fa;
  height: 100%;
}
.image-error {
  margin: auto;
  display: flex;
  width: 300px;
}
.title-error {
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-top: 2vw;
}
.desc-error {
  display: flex;
  justify-content: center;
  margin-top: 1.5vw;
  color: #828282;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.backhome {
  margin-top: 3.5vw;
  display: flex;
  justify-content: center;
}
.btn-backhome {
  background-color: #f95031;
  width: 222px;
  height: 50px;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
}
</style>
