<template>
  <div style="background-color: #f6f6f9">
    <section id="home" class="register-now container">
      <div class="row">
        <img
          :src="require('@/assets/img/background/bg-circle.png')"
          alt="circle background"
          class="bg-circle"
        />
        <div class="col-lg-5 col-md-6 image-mobile">
          <img :src="require('@/assets/img/hero/home-model.png')" />
        </div>
        <div class="col-lg-7 col-md-6 content">
          <h1 class="title">
            Juaranya Platform Kirim Barang, Mudah dan Murah dengan
            <span class="order">Komship</span>
          </h1>
          <p class="description">
            Dapatkan <i>CASHBACK</i> mulai dari 25% dan GRATIS biaya retur!
            Pelajari lebih lanjut untuk dapat tawaran menarik.
          </p>
          <button
            class="btn btn-primary btn-register-now"
            @click="openWindow('https://partner.komerce.id/komship-register')"
          >
            Mulai Sekarang
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
            <h2 class="title">Sering kirim barang?</h2>
          </div>
          <div class="col-lg-6 col-md-6 description">
            Sudah saatnya kamu beralih ke platform yang bisa memberikan berlipat
            keuntungan dan kenyamanan dalam melakukan pengiriman barang. Komship
            kini hadir untuk memudahkan pengiriman kamu dengan berbagai benefit
            TANPA MINIMUM JUMLAH PENGIRIMAN.
          </div>
        </div>
        <div class="row mt-5 service-desktop">
          <div
            class="col-lg-4 col-md-6"
            v-for="item in service_items"
            :key="item.id"
          >
            <div class="card content">
              <div class="card-body">
                <img :src="item.image" class="icons" />
                <h3 class="title-content">{{ item.title }}</h3>
                <p class="description-content">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="service-mobile">
          <carousel>
            <slide v-for="item in service_items" :key="item.id">
              <div class="card mx-3">
                <div class="card-body">
                  <img :src="item.image" class="icons mb-3" />
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
    <section class="conclusion">
      <div class="row">
        <div class="col-md-2 image-mobile">
          <img
            :src="require('@/assets/img/background/bg-gambar.png')"
            class="bg-gambar"
          />
        </div>
        <div class="col-lg-6 col-md-8 content">
          <p class="description-content" style="font-size: 24px">
            Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
            pengiriman COD dan Non-COD
          </p>
        </div>
        <img
          :src="require('@/assets/img/logo/jne-logo.png')"
          alt="logo jne"
          class="bg-monster"
        />
      </div>
    </section>
    <section id="feature" class="feature">
      <img
        :src="require('@/assets/img/background/bg-ellipse.png')"
        alt="background ellipse"
        class="bg-ellipse"
      />
      <img
        :src="require('@/assets/img/background/bg-dots.png')"
        alt="background dots"
        class="bg-dots"
      />
      <img
        :src="require('@/assets/img/background/bg-square.png')"
        alt="background square"
        class="bg-square"
      />
      <img
        :src="require('@/assets/img/background/bg-monster.png')"
        alt="background monster"
        class="bg-monster"
      />
      <div class="container">
        <h2 class="title">Fitur</h2>
        <div class="row">
          <div class="col-md-6 image-mobile">
            <img
              :src="require('@/assets/img/partials/dashboard-feature.png')"
              alt="dashboard feature"
            />
          </div>
          <div class="col-md-6 content">
            <img
              :src="require('@/assets/img/icons/dashboard-feature-icon.png')"
              alt="dashboard feature icon"
              class="icons-content"
              width="90%"
            />
            <h2 class="title-content">Dashboard Komship</h2>
            <p class="description-content">
              Dapatkan informasi ter<i>update</i> dan <i>insight</i> tentang
              produk terlaris, <i>customer loyal</i>, top admin order, top
              <i>customer service</i>, hingga laporan penghasilan penjualan
              secara <i>realtime</i> hanya di satu dashboard.
            </p>
          </div>
          <div class="col-md-6 image-desktop">
            <img
              :src="require('@/assets/img/partials/dashboard-feature.png')"
              alt="dashboard feature"
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
              alt="income feature icon"
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
              alt="maintenance feature"
            />
          </div>
          <div class="col-md-6 content">
            <img
              :src="require('@/assets/img/icons/maintenance-feature-icon.png')"
              alt="maintenance feature icon"
              class="icons-content"
            />
            <h2 class="title-content">Pengelolaan Produk</h2>
            <p class="description-content">
              Penyesuaian daftar produk hingga <i>update</i> stok dapat diatur
              mudah dalam satu sistem yang terintegrasi.
            </p>
          </div>
          <div class="col-md-6 image-desktop">
            <img
              :src="require('@/assets/img/partials/maintenance-feature.png')"
              alt="maintenance feature"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="service" class="service">
      <div class="container">
        <h2 class="title">Fitur Tambahan</h2>
        <div class="row mt-5 service-desktop">
          <div
            class="col-lg-4 col-md-6"
            v-for="item in service_item"
            :key="item.id"
          >
            <div
              class="card content"
              style="background-color: #ff6a3a border-radius: 24px;width:338px; height:381px;"
            >
              <div
                class="card-body"
                style="background-color: #ff6a3a; border-radius: 24px"
              >
                <img
                  :src="item.image"
                  class="icons"
                  style="
                    width: 307.68px;
                    height: 263.4px;
                    background-color: white;
                    border-radius: 24px;
                  "
                />
                <h3
                  class="title-content"
                  style="text-align: center; color: white"
                >
                  {{ item.title1 }}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="service-mobile">
          <carousel>
            <slide v-for="item in service_items" :key="item.id">
              <div class="card mx-3">
                <div class="card-body">
                  <img :src="item.image" class="icons mb-3" />
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
    <section class="conclusion1">
      <div class="row">
        <div class="col-md-1 image-mobile">
          <img
            :src="require('@/assets/img/background/foto2.png')"
            class="bg-gambar"
          />
        </div>
        <div class="col-lg-6 col-md-8 content">
          <p class="description-content" style="font-size: 24px">
            Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
            pengiriman COD dan Non-COD
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      service_items: [
        {
          id: 1,
          title: "Terima Pembayaran Mudah",
          image: require("@/assets/img/icons/wallet-check.png"),
          description:
            "Langsung bisa terima pembayaran dari customer dengan mudah dan tanpa syarat.",
        },
        {
          id: 2,
          title: "Pencarian Setiap Hari",
          image: require("@/assets/img/icons/income-icon.png"),
          description:
            "Kamu bisa tarik dana COD kapanpun karena pencairan dapat dilakukan setiap hari.",
        },
        {
          id: 3,
          title: "Lebih Hemat",
          image: require("@/assets/img/icons/analyst-icon.png"),
          description:
            "Dapatkan cashback ongkos kirim MULAI dari 25%! Lebih hemat dibandingkan yang lain.",
        },
        {
          id: 4,
          title: "Biaya COD Termurah",
          image: require("@/assets/img/icons/monitoring-cs-icon.png"),
          description: "Biaya COD cuma 2,8%, Nggak pake mahal!",
        },
        {
          id: 5,
          title: "Gratis Biaya Retur",
          image: require("@/assets/img/icons/rts-icon.png"),
          description:
            "Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD   *S&K berlaku.",
        },
        {
          id: 6,
          title: "Gratis Jemput Paket",
          image: require("@/assets/img/icons/cashback-icon.png"),
          description:
            "Cukup tunggu saja di rumah, ekspedisi akan mendatangi lokasimu untuk mengambil paket TANPA MINIMUM ORDER.",
        },
      ],
      service_item: [
        {
          id: 1,
          title1: "Terima Pembayaran Mudah",
          image: require("@/assets/img/background/bgfitur.png"),
          description:
            "Langsung bisa terima pembayaran dari customer dengan mudah dan tanpa syarat.",
        },
        {
          id: 2,
          title1: "Customer Loyal",
          image: require("@/assets/img/background/bgcustomer.png"),
          description:
            "Kamu bisa tarik dana COD kapanpun karena pencairan dapat dilakukan setiap hari.",
        },
        {
          id: 3,
          title1: "Top Admin Order",
          image: require("@/assets/img/background/bgorder.png"),
          description:
            "Dapatkan cashback ongkos kirim MULAI dari 25%! Lebih hemat dibandingkan yang lain.",
        },
      ],
    };
  },
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
    openWindow(url) {
      window.open(url);
    },
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
  font-family: "Poppins", sans-serif;
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
  font-weight: 600;
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
.service-mobile {
  display: none;
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
.conclusion1 {
  display: flex;
  justify-content: left;
  height: 316px;
  background-size: 50px;
  background-color: #ff6a3a;
  color: #ffffff;
}
.conclusion .content {
  margin: auto;
  text-align: left;
  font-size: 18px;
  line-height: 150%;
}
.conclusion .description-content {
  color: #ffffff;
  margin-right: 30px;
}
.conclusion .btn-register-conclusion {
  width: 208px;
  height: 60px;
  border-radius: 12px;
}

.conclusion .bg-monster {
  position: absolute;
  display: block;
  margin-top: 15px;
  right: -4px;
  width: 186px;
  height: 286px;
}
.conclusion .bg-gambar {
  position: absolute;
  display: block;
  margin-top: 1px;
  left: 56px;
  width: 290px;
  height: 350px;
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
  .service-desktop {
    display: none;
  }
  .service-mobile {
    display: unset;
  }
  .service-mobile .card {
    margin-top: 20px;
    min-height: 200px;
    border: none;
    border-radius: 10px;
  }
  .service-mobile h3 {
    font-weight: 600;
    font-size: 18px;
  }
  .service .title {
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
    width: 80%;
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
  .service-mobile .card {
    min-height: 250px;
  }
  .service-mobile p {
    font-size: 14px;
  }
}
</style>
