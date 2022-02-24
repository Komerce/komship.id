<template>
  <div style="background-color: #f6f6f9">
    <section id="home" class="register-now container">
      <div class="row">
        <div class="col-lg-5 col-md-6 image-mobile">
          <img :src="require('@/assets/img/hero/model.png')" />
        </div>
        <div class="col-lg-6 col-md-7 content">
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
        <div class="col-lg-5 col-md-7 image-desktop">
          <img
            :src="require('@/assets/img/hero/model.png')"
            style="margin-right: 10px; margin-left: 200px"
          />
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
      <div
        class="row"
        style="
          background: linear-gradient(to bottom, #ff6a3a 0%, #ff6a3a 100%)
            no-repeat;
        "
      >
        <div class="col-md-2 image-mobile">
          <img
            :src="require('@/assets/img/background/bg-gambar.png')"
            class="bg-gambar"
          />
        </div>
        <div class="col-lg-6 col-md-10 content">
          <p class="description-content" style="font-size: 28px">
            Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
            pengiriman COD dan non COD
          </p>
        </div>
        <div class="image-partner1">
          <img
            :src="require('@/assets/img/logo/jne-logo.png')"
            alt="logo jne"
          />
        </div>
      </div>
    </section>
    <section id="alur" class="feature">
      <div class="container">
        <div class="row">
          <div class="col-md-1 image-mobile"></div>
          <div class="col-md-6 content">
            <h2 class="title-content">Alur pengiriman</h2>
            <h2 class="title-content">
              menggunakan
              <span class="order" style="color: #fba63c">Komship</span>
            </h2>
            <div class="row mt-5 service-desktop">
              <div v-for="item in services_item" :key="item.id">
                <img :src="item.image" class="icons" />
                <h1 class="title-content">{{ item.title1 }}</h1>
                <img :src="item.gambar" class="icons" />
              </div>
            </div>
          </div>
          <div class="col-md-6 image-desktop">
            <img
              :src="require('@/assets/img/icons/dashboard.png')"
              alt="dashboard feature"
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
          image: require("@/assets/img/icons/bgwallet.png"),
          description:
            "Langsung bisa terima pembayaran dari customer dengan mudah dan tanpa syarat.",
        },
        {
          id: 2,
          title: "Pencarian Setiap Hari",
          image: require("@/assets/img/icons/calender.png"),
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
          image: require("@/assets/img/icons/empty-wallet1.png"),
          description: "Biaya COD cuma 2,8%, Nggak pake mahal!",
        },
        {
          id: 5,
          title: "Gratis Biaya Retur",
          image: require("@/assets/img/icons/rts-icon1.png"),
          description:
            "Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD   *S&K berlaku.",
        },
        {
          id: 6,
          title: "Gratis Jemput Paket",
          image: require("@/assets/img/icons/kendaraan.png"),
          description:
            "Cukup tunggu saja di rumah, ekspedisi akan mendatangi lokasimu untuk mengambil paket TANPA MINIMUM ORDER.",
        },
      ],
      services_item: [
        {
          id: 1,
          title2: "tes",
          image: require("@/assets/img/icons/circle1.png"),
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 2,
          title2: "tes",
          image: require("@/assets/img/icons/gram1.png"),
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 3,
          title2: "tes",
          image: require("@/assets/img/icons/seller2.png"),
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 4,
          title2: "tes",
          image: require("@/assets/img/icons/ekspedisi.png"),
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 5,
          title2: "tes",
          image: require("@/assets/img/icons/barangditerima.png"),
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 6,
          title2: "tes",
          image: require("@/assets/img/icons/dana.png"),
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
.register-now .content {
  margin-top: 5vw;
}
.register-now .title {
  font-weight: bold;
  font-size: 40px;
  position: static;
  width: 540px;
  font-style: normal;
  height: 180px;
  line-height: 150%;
  margin: 16px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.register-now .title .kepada {
  display: flex;
}
.image-partner {
  position: absolute;
  width: 186px;
  height: 59.12px;
  left: 962px;
  top: 1798px;
}
.register-now .title .order {
  color: #ff6a3a;
}
.register-now .description {
  position: static;
  width: 491px;
  height: 48px;
  left: 0px;
  top: 232px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  text-align: justify;
  letter-spacing: 0.5px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 0px;
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
.alur .title-content {
  position: static;
  width: 290px;
  height: 24px;
  left: 20px;
  top: 0px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.5px;
  color: #828282;
}
.conclusion1 {
  position: absolute;
  display: flex;
  justify-content: left;
  height: 255px;
  width: 1284px;
  left: -4px;
  background: linear-gradient();
  top: 1716px;
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
.conclusion .bg-monster1 {
  position: absolute;
  width: 186px;
  height: 59.12px;
  background: linear-gradient(#ff6a3a 100%, #ff6a3c 100%);
  right: 100px;
  top: 100px;
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
