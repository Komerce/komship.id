<template>
  <div style="background-color: #f6f6f9">
    <section id="home" class="register-now container">
      <div class="row">
        <img
          :src="require('@/assets/img/background/bg-circle.png')"
          class="bg-circle"
        />
        <div class="col-lg-5 col-md-6 image-mobile">
          <img :src="require('@/assets/img/hero/home-model.png')" />
        </div>
        <div class="col-lg-7 col-md-6 content">
          <h1 class="title">
            Percayakan Pengelolaan Pengiriman Paket
            <span class="order">Orderanmu</span><br />Kepada Komship
          </h1>
          <p class="description">
            Dengan menggunakan Komship proses pengiriman paket orderan akan
            lebih mudah dan menguntungkan. Tidak hanya itu, kamu akan makin
            untung dengan adanya cashback biaya pengiriman barang COD dan
            kemudahan penarikan dana hasil dari transaksi COD kapanpun setelah
            barang diterima pembeli.
          </p>
          <button class="btn btn-primary btn-register-now">
            Daftar sekarang juga
          </button>
        </div>
        <div class="col-lg-5 col-md-6 image-desktop">
          <img :src="require('@/assets/img/hero/home-model.png')" />
        </div>
      </div>
    </section>
    <section id="service" class="service">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <h2 class="title">Kenapa Harus Komship?</h2>
          </div>
          <div class="col-lg-7 col-md-6 description">
            Dengan komship proses pengelolaan orderan tidak sebatas pada
            pengiriman barang saja. Namun banyak manfaat dari layanan Komship
            yang bisa kamu dapatkan untuk peningkatan bisnismu.
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 col-md-6">
            <div class="card content">
              <div class="card-body">
                <img
                  :src="require('@/assets/img/icons/rts-icon.png')"
                  class="icons"
                />
                <h3 class="title-content">RTS Rendah</h3>
                <p class="description-content">
                  Tingkat pengembalian barang rendah, pebisnis semakin untung.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card content">
              <div class="card-body">
                <img
                  :src="require('@/assets/img/icons/income-icon.png')"
                  class="icons"
                />
                <h3 class="title-content">Informasi Penghasilan</h3>
                <p class="description-content">
                  Makin mudah pantau penghasilan terupdate kapanpun dan di
                  manapun.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card content">
              <div class="card-body">
                <img
                  :src="require('@/assets/img/icons/analyst-icon.png')"
                  class="icons"
                />
                <h3 class="title-content">Analisa Produk Terlaris</h3>
                <p class="description-content">
                  Dapatkan insight pengembangan produk dengan analisa produk
                  terlaris.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card content">
              <div class="card-body">
                <img
                  :src="require('@/assets/img/icons/monitoring-cs-icon.png')"
                  class="icons"
                />
                <h3 class="title-content">Pantau Performa Customer Service</h3>
                <p class="description-content">
                  Makin mudah memaksimalkan kinerja CS dengan sistem pemantauan
                  praktis dan real-time.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card content">
              <div class="card-body">
                <img
                  :src="require('@/assets/img/icons/cod-icon.png')"
                  class="icons"
                />
                <h3 class="title-content">Pencairan Uang COD Kapan Saja</h3>
                <p class="description-content">
                  Cashflow pantang terganggu, dengan kemudahan pencaiaran dana
                  kapanpun.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card content">
              <div class="card-body">
                <img
                  :src="require('@/assets/img/icons/cashback-icon.png')"
                  class="icons"
                />
                <h3 class="title-content">Cashback Ongkos Kirim</h3>
                <p class="description-content">
                  Semakin rajin kirim barang, semakin untung! cashback ongkis
                  kirim menantimu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="feature" class="feature">
      <img
        :src="require('@/assets/img/background/bg-ellipse.png')"
        class="bg-ellipse"
      />
      <img
        :src="require('@/assets/img/background/bg-dots.png')"
        class="bg-dots"
      />
      <img
        :src="require('@/assets/img/background/bg-square.png')"
        class="bg-square"
      />
      <img
        :src="require('@/assets/img/background/bg-monster.png')"
        class="bg-monster"
      />
      <div class="container">
        <h2 class="title">Fitur</h2>
        <div class="row">
          <div class="col-md-6 image-mobile">
            <img
              :src="require('@/assets/img/partials/dashboard-feature.png')"
            />
          </div>
          <div class="col-md-6 content">
            <img
              :src="require('@/assets/img/icons/dashboard-feature-icon.png')"
              class="icons-content"
              width="90%"
            />
            <h2 class="title-content">Dashboard Komship</h2>
            <p class="description-content">
              Dapatkan informasi terupdate dan insight tentang produk terlaris,
              customer loyal, top admin order, top customer service, hingga
              laporan penghasilan penjualan secara realtime hanya di satu
              dashboard.
            </p>
          </div>
          <div class="col-md-6 image-desktop">
            <img
              :src="require('@/assets/img/partials/dashboard-feature.png')"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 image-mobile">
            <img :src="require('@/assets/img/partials/income-feature.png')" />
          </div>
          <div class="col-md-6 image-desktop">
            <img :src="require('@/assets/img/partials/income-feature.png')" />
          </div>
          <div class="col-md-6 content">
            <img
              :src="require('@/assets/img/icons/income-feature-icon.png')"
              class="icons-content"
            />
            <h2 class="title-content">Informasi Penghasilan</h2>
            <p class="description-content">
              Pebisnis akan semakin mudah menganalisa data penghasilan baik dari
              transaksi menggunakan metode COD ataupun transfer bank.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 image-mobile">
            <img
              :src="require('@/assets/img/partials/maintenance-feature.png')"
            />
          </div>
          <div class="col-md-6 content">
            <img
              :src="require('@/assets/img/icons/maintenance-feature-icon.png')"
              class="icons-content"
            />
            <h2 class="title-content">Pengelolaan Produk</h2>
            <p class="description-content">
              Penyesuaian daftar produk hingga update stok dapat diatur dengan
              mudah dalam satu sistem yang terintegrasi.
            </p>
          </div>
          <div class="col-md-6 image-desktop">
            <img
              :src="require('@/assets/img/partials/maintenance-feature.png')"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="conclusion">
      <div class="row">
        <img
          :src="require('@/assets/img/background/bg-dots-white.png')"
          class="bg-dots"
        />
        <div class="col-lg-6 col-md-8 content">
          <p class="description-content">
            Komship saat ini telah bekerjasama dengan JNE untuk menjadi mitra
            ekspedisi untuk pengiriman barang. Ketika UMKM menggunakan layanan
            Komship, maka UMKM akan mendapatkan cashback ongkir sebesar 25%.
          </p>
          <button class="btn btn-register-conclusion btn-outline-light">
            Daftar sekarang
          </button>
        </div>
        <img
          :src="require('@/assets/img/background/bg-monster-white.png')"
          class="bg-monster"
        />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  created() {
    window.addEventListener("scroll", this.homeScroll);
    window.addEventListener("scroll", this.serviceScroll);
    window.addEventListener("scroll", this.featureScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.homeScroll);
    window.removeEventListener("scroll", this.serviceScroll);
    window.removeEventListener("scroll", this.featureScroll);
  },
  mounted() {
    document.getElementById("menuHome").classList.add("active");
  },
  methods: {
    homeScroll() {
      const el = document.getElementById("home");
      const elTop = document.body.getBoundingClientRect().top;
      const elBottom = el.getBoundingClientRect().bottom;
      if (elTop >= 0 || elBottom <= 0) {
        document.getElementById("menuHome").classList.remove("active");
      }
      if (elTop <= 0 && elBottom >= 0) {
        document.getElementById("menuHome").classList.add("active");
      }
    },
    serviceScroll() {
      const el = document.getElementById("service");
      const elTop = el.getBoundingClientRect().top;
      const elBottom = el.getBoundingClientRect().bottom;
      if (elTop >= 0 || elBottom <= 0) {
        document.getElementById("menuService").classList.remove("active");
      }
      if (elTop <= 0 && elBottom >= 0) {
        document.getElementById("menuService").classList.add("active");
      }
    },
    featureScroll() {
      const el = document.getElementById("feature");
      const elTop = el.getBoundingClientRect().top;
      const elBottom = el.getBoundingClientRect().bottom;
      if (elTop >= 0 || elBottom <= 0) {
        document.getElementById("menuFeature").classList.remove("active");
      }
      if (elTop <= 0 && elBottom >= 0) {
        document.getElementById("menuFeature").classList.add("active");
      }
    },
  },
};
</script>
<style>
.register-now {
  display: flex;
  width: 100%;
  padding-bottom: 5vw;
  scroll-margin-top: 70px;
}
.register-now .image-mobile {
  display: none;
}
.register-now .image-desktop img {
  max-width: 100%;
}
.register-now .bg-circle {
  position: absolute;
  width: 124px;
  margin-top: 4vw;
  margin-left: -2vw;
}
.register-now .content {
  margin-top: 5vw;
}
.register-now .title {
  font-weight: 700;
  font-size: 40px;
  line-height: 160%;
}
.register-now .title .kepada {
  display: flex;
}
.register-now .title .order {
  color: #ff6a3a;
}
.register-now .description {
  margin-top: 2vw;
  width: 80%;
  color: #828282;
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 400;
  text-align: justify;
}
.register-now .btn-register-now {
  margin-top: 1vw;
  font-weight: 800;
  font-size: 16px;
  min-width: 231px;
  height: 60px;
}

/* serviceYYY */
.service {
  padding-top: 5vw;
  background-color: #f8f9fa;
  scroll-margin-top: 70px;
}
.service .title {
  font-weight: 700;
  font-size: 32px;
  display: flex;
  justify-content: center;
}
.service .description {
  color: #828282;
  font-weight: 400;
  line-height: 24px;
  text-align: justify;
}
.service .content {
  border: none;
  border-radius: 10px;
  min-height: 230px;
  margin-bottom: 1.8vw;
}
.service .title-content {
  margin-top: 1.5vw;
  font-size: 18px;
  font-weight: 600;
}
.service .description-content {
  color: #828282;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.service .icons {
  width: 80px;
}

/* feature */
.feature {
  background-color: #f8f9fa;
  padding-top: 5vw;
  padding-bottom: 8vw;
  scroll-margin-top: 70px;
}
.feature .row {
  padding-bottom: 20vh;
}
.feature .title {
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 5vw;
}
.feature .content {
  margin: auto;
}
.feature .icons-content {
  width: 60px;
}
.feature .title-content {
  margin-top: 1vw;
  font-size: 32px;
  font-weight: 700;
}
.feature .description-content {
  width: 85%;
  color: #828282;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 1vw;
  text-align: justify;
}
.feature .bg-ellipse {
  position: absolute;
  margin-top: -7vw;
  width: 150px;
}
.feature .bg-dots {
  position: absolute;
  height: 216.52px;
  margin-top: 41vw;
  left: 0;
}
.feature .bg-monster {
  position: absolute;
  width: 150px;
  right: -0;
  margin-top: 90vw;
}
.feature .bg-square {
  position: absolute;
  bottom: 13vw;
}
.feature img {
  max-width: 90%;
}
.feature .image-mobile {
  display: none;
}
.conclusion {
  display: flex;
  justify-content: center;
  height: 316px;
  background-color: #ff6a3a;
  color: #ffffff;
}
.conclusion .content {
  margin: auto;
  text-align: center;
  font-size: 16px;
  line-height: 150%;
}
.conclusion .description-content {
  color: #ffffff;
}
.conclusion .btn-register-conclusion {
  width: 208px;
  height: 60px;
  border-radius: 12px;
}
.conclusion .bg-dots {
  position: absolute;
  left: -33px;
  margin-top: 45px;
  width: 117px;
  height: 216px;
}
.conclusion .bg-monster {
  position: absolute;
  display: block;
  margin-top: 15px;
  right: -40px;
  width: 200px;
  height: 286px;
}
@media only screen and (max-width: 1024px) {
  .register-now .bg-circle {
    width: 96px;
  }
  .register-now .title {
    font-size: 36px;
    line-height: 50px;
  }
  .register-now .description {
    font-size: 16px;
  }
  .register-now .image-desktop {
    margin: auto 0;
  }
  .service .title {
    font-weight: 700;
    font-size: 24px;
  }
  .service .content {
    min-height: 290px;
  }
  .feature .row {
    padding-bottom: 10vh;
  }
  .feature .bg-ellipse {
    margin-top: -4vw;
    width: 100px;
  }
  .feature .bg-monster {
    width: 100px;
    margin-top: 108vw;
  }
  .feature .bg-dots {
    height: 180px;
    margin-top: 48vw;
  }
  .feature .bg-square {
    width: 90px;
  }
  .conclusion .bg-dots {
    margin-top: 60px;
    width: 120px;
    height: 150px;
  }
  .conclusion .bg-monster {
    margin-top: 40px;
    width: 150px;
    height: 200px;
  }
}
@media only screen and (max-width: 991px) {
  .register-now .bg-circle {
    width: 80px;
  }
  .register-now .title {
    font-size: 24px;
    line-height: 40px;
  }
  .register-now .description {
    font-size: 14px;
    width: 100%;
  }
  .service .title {
    margin-top: 4vh;
  }
  .service .content {
    min-height: 200px;
  }
  .feature .title-content {
    font-size: 20px;
  }
  .feature .bg-ellipse {
    display: none;
  }
  .feature .bg-dots {
    display: none;
  }
  .feature .bg-square {
    display: none;
  }
  .feature .bg-monster {
    width: 100px;
    margin-top: 80vh;
  }
}
@media only screen and (max-width: 540px) {
  .register-now .bg-circle {
    display: none;
  }
  .register-now .title {
    font-size: 30px;
  }
  .register-now .image-desktop {
    display: none;
  }
  .register-now .image-mobile {
    display: unset;
  }
  .register-now .image-mobile img {
    max-width: 100%;
  }
  .service .title {
    margin-bottom: 5vw;
  }
  .service .content {
    padding: 2vw 4vw;
    margin-bottom: 5vw;
  }
  .feature .row {
    padding-bottom: 5vh;
  }
  .feature .title-content {
    margin-top: 1vh;
    font-size: 32px;
  }
  .feature .description-content {
    width: 100%;
  }
  .feature .image-mobile {
    display: flex;
    width: 85%;
    margin: auto;
  }
  .feature .image-desktop {
    display: none;
  }
  .feature .content {
    margin-top: 8vw;
  }
  .feature .bg-monster {
    display: none;
  }
  .conclusion .bg-dots {
    display: none;
  }
  .conclusion .bg-monster {
    display: none;
  }
  .conclusion .description-content {
    width: 85%;
    margin: auto;
  }
  .conclusion .btn-register-conclusion {
    margin-top: 5vw;
  }
}
@media only screen and (max-width: 360px) {
  .register-now .title {
    font-size: 26px;
  }
  .feature .title-content {
    font-size: 26px;
  }
}
</style>
