<template>
  <div class="wrapperContainerHomePage">
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
            @click="openWindow(defaultRedirectURL)"
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
    <!-- conclusion -->
    <section class="conclusion">
      <div class="conclusion__rect conclusion__rect1"></div>
      <div class="conclusion__rect conclusion__rect2"></div>
      <div class="conclusion__rect conclusion__rect3"></div>
      <img
        :src="require('@/assets/img/background/bg-gambar.png')"
        alt="bg gambar"
        class="conclusion__bggambar"
      />
      <p class="conclusion__text">
        Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung pengiriman COD dan non COD
      </p>
      <img
        :src="require('@/assets/img/logo/logo_jne.png')"
        class="conclusion__logojne"
        alt="logo jne"
      />
    </section>
    <section class="conclusionmobile">
      <img
        :src="require('@/assets/img/person/conclusion-person-mobile.png')"
        alt="bg gambar"
        class="conclusionmobile__bggambar"
      />
      <div class="conclusionmobile__content">
        <p class="conclusionmobile__text">
          Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung pengiriman COD dan non COD
        </p>
        <img
          :src="require('@/assets/img/logo/logo_jne.png')"
          class="conclusionmobile__logojne"
          alt="logo jne"
        />
      </div>
    </section>

    <!-- feature -->
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
              <div v-for="(item, idx) in services_item" :key="item.id">
                <img :src="item.image" class="icons" />
                <h1 class="title-content">{{ item.title1 }}</h1>
                <img v-if="(services_item.length - 1) !== idx" :src="item.gambar" class="icons" />
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
    
    <!-- service -->
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
      </div>
    </section>

    <!-- contactkomerce -->
    <section id="contactkomerce" class="contactkomerce">
      <div class="contactkomerce__left">
        <h5 class="contactkomerce__left--text">Hubungi kami untuk informasi lebih lanjut</h5>
        <img :src="require('@/assets/img/person/contactleft.png')" class="contactkomerce__left--img" />
        <a class="contactkomerce__left--link" href="https://wa.me/6281328014170" target="_blank">
          <span class="contactkomerce__left--link--text">WhatsApp</span>
          <img :src="require('@/assets/img/icons/whatsapp-contact.png')" class="contactkomerce__left--link-img" />
        </a>
      </div>
      <div class="contactkomerce__right">
        <h5 class="contactkomerce__right--text">Percayakan Pengiriman Ordermu Pada Komship!</h5>
        <img :src="require('@/assets/img/person/contactright.png')" class="contactkomerce__right--img" />
        <a class="contactkomerce__right--link" :href="defaultRedirectURL" target="_blank">
          <span class="contactkomerce__right--link-text">Daftar Sekarang</span>
        </a>
      </div>
    </section>
     <!-- contactkomerce mobile -->
    <section id="contactkomercemobile" class="contactkomercemobile">
      <div class="contactkomerce__right">
        <h5 class="contactkomerce__right--text">Percayakan Pengiriman Ordermu Pada Komship!</h5>
        <img :src="require('@/assets/img/person/contactright.png')" class="contactkomerce__right--img" />
        <a class="contactkomerce__right--link" :href="defaultRedirectURL" target="_blank">
          <span class="contactkomerce__right--link-text">Daftar Sekarang</span>
        </a>
      </div>
      <div class="contactkomerce__left">
        <h5 class="contactkomerce__left--text">Hubungi kami untuk informasi lebih lanjut</h5>
        <img :src="require('@/assets/img/person/contactleft.png')" class="contactkomerce__left--img" />
        <a class="contactkomerce__left--link" href="https://wa.me/6281328014170" target="_blank">
          <span class="contactkomerce__left--link--text">WhatsApp</span>
          <img :src="require('@/assets/img/icons/whatsapp-contact.png')" class="contactkomerce__left--link-img" />
        </a>
      </div>
    </section>

    <!-- testimoni -->
    <div id="testimoniwrapper" class="testimoniwrapper">
      <h2 class="testimoniwrapper--text">
        <span style="color: #FF6A3A;">Komship</span>&nbsp;telah dipercaya oleh UMKM 
      </h2>
      <carousel :autoplay="15000" :settings="settingscarousel" :wrapAround="true" :breakpoints="breakpoints">
        <slide v-for="item in testimoniesData" :key="item.id">
          <div class="carousel__item">
            <div class="slidertestimoni">
              <div class="slidertestimoni__head">
                <div>
                  <h5 class="slidertestimoni__head--text">{{ item.name }}</h5>
                </div>
                <div class="slidertestimoni__head--wrapperimg">
                  <img :src="item.image" class="slidertestimoni__head--img" />
                </div>
              </div>
              <div class="slidertestimoni__body">
                <p class="slidertestimoni__body--text">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <Pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      defaultRedirectURL: "https://partner.komerce.id/komship-register",
      // carousel settings
      settingscarousel: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        600: {
          itemsToShow: 2.95,
          snapAlign: 'center',
        },
      },
      testimoniesData: [
        {
          name: "Eko Sulistiyono",
          image: require("@/assets/img/person/testimoni-eko-s.png"),
          description: "Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.",
        },
        {
          name: "Agus David Saputra",
          image: require("@/assets/img/person/testimoni-agus.png"),
          description: "Alhamdulilah lancar mba, fiturnya mudah di pahami juga. Apalagi, Kalau ada kendala team Komship siap membantu dan fast respon. Pemakaiannya juga simple, beda sama Aplikasi serupa yang lain.",
        },
        {
          name: "Diki Arliansyah",
          image: require("@/assets/img/person/testimoni-diki.png"),
          description: "Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁🙏",
        },
        {
          name: "Ananda Bagas",
          image: require("@/assets/img/person/testimoni-ananda.png"),
          description: "Absolutely perfect ! Sangat terbantu dengan fiturnya yang lengkap & praktis untuk memproses orderan. cashback ongkir 25% yang lumayan gurih, ditambah pencairan dana setiap hari yang dapat memperlancar cash flow.",
        },
      ],
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
    openWindow(url = '') {
      if (url) {
        window.open(this.defaultRedirectURL);
      }
      return;
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
.wrapperContainerHomePage {
  background-color: #f6f6f9;
  padding-bottom: 100px;
}
/* contactkomerce */
.contactkomercemobile {
  display: none;
}
.contactkomerce {
  margin-bottom: 140.36px;
  height: 275.15px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.contactkomerce__left {
  position: relative;
  height: 100%;
  background: #FBA63C;
}
.contactkomerce__left--text {
  position: absolute;
  width: 282px;
  height: 72px;
  right: 112px;
  top: 57.07px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  z-index: 1;
}
.contactkomerce__left--img {
  position: absolute;
  width: 209px;
  height: 311.83px;
  left: 0px;
  bottom: 0px;
}
.contactkomerce__left--link {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 189px;
  height: 56px;
  right: 205px;
  top: 163.07px;
  background: #1FCB32;
  border-radius: 8px;
}
.contactkomerce__left--link--text {
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.5px;
  color: #FFFFFF;
}
.contactkomerce__left--link-img {
  width: 28px;
  height: 28px;
}
.contactkomerce__right {
  position: relative;
  height: 100%;
  background: #FCEBBE;
}
.contactkomerce__right--text {
  position: absolute;
  width: 352px;
  height: 72px;
  left: 82px;
  top: 56.64px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #222222;
  z-index: 1;
}
.contactkomerce__right--img {
  position: absolute;
  width: 272px;
  height: 325px;
  right: 0px;
  bottom: 0px;
}
.contactkomerce__right--link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  position: absolute;
  width: 189px;
  height: 56px;
  left: 82px;
  top: 162.64px;
  background: #FF6A3A;
  border-radius: 8px;
}
.contactkomerce__right--link-text {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.5px;
  color: #FFFFFF;
}
/* end contactkomerce */
/* slider testimoni */
.testimoniwrapper {
  display: grid;
  justify-content: center;
  align-items: center;
}
.testimoniwrapper--text {
  font-weight: bold;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
}
.slidertestimoni {
  width: 570px;
  min-height: 279px;
  background: #FFFFFF;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}
.slidertestimoni__head {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
  background: #FF6A3A;
  border-radius: 20px 20px 0px 0px;
  position: relative;
}
.slidertestimoni__head--text {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #FFFFFF;
}
.slidertestimoni__head--wrapperimg {
  position: absolute;
  width: 106px;
  height: 106px;
  left: 43px;
  top: 15px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slidertestimoni__head--img {
  object-fit: contain;
  border-radius: 50%;
  width: 94.8px;
  height: 94.8px;
}
.slidertestimoni__body {
  width: 100%;
  height: calc(100% - 85px);
  border-radius: 0px 0px 20px 20px;
  padding: 51px 19px 55px;
}
.slidertestimoni__body--text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.5px;
  width: 80%;
  margin: 0px auto;
  color: #000000;
}
ol.carousel__pagination {
  margin-bottom: 0px;
}
.carousel__pagination-button {
  margin: var(--vc-pgn-margin);
  width: 10px;
  height: 10px;
  border-radius: var(--vc-pgn-height);
  border: 0;
  cursor: pointer;
  background-color: #FFECE9;
}
.carousel__pagination-button--active {
  background-color: #FF6A3A;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
/* end slider testimoni */
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
  margin-bottom: 150px;
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
  scroll-margin-top: 70px;
  margin: 101px 0px 0px;
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
  position: relative;
  height: 255px;
  background: linear-gradient(90deg, #FF6A3A -20.91%, #FBA63C 85.49%);
}
.conclusion__rect {
  position: absolute;
  width: 131px;
  height: 11px;
  background: #FFFFFF;
  border-radius: 20px;
  z-index: 1;
}
.conclusion__rect1 {
  left: -64px;
  top: 76px;
}
.conclusion__rect2 {
  left: 16px;
  top: 113px;
}
.conclusion__rect3 {
  left: -84px;
  top: 150px;
}
.conclusion__text {
  position: absolute;
  width: 591px;
  right: 324px;
  top: 69px;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  z-index: 2;
}
.conclusion__bggambar {
  position: absolute;
  left: 56px;
  bottom: 0px;
  width: 299px;
  height: 393.61px;
  z-index: 2;
}
.conclusion__logojne {
  position: absolute;
  width: 186px;
  height: 59.12px;
  right: 132px;
  top: 82px;
  z-index: 2;
}
.conclusionmobile {
  display: none;
  position: relative;
  height: 174px;
  background: linear-gradient(90deg, #FF6A3A -20.91%, #FBA63C 85.49%);
}
.conclusionmobile__content {
  display: grid;
  margin: 0px 0px 0px 94px;
  padding-top: 21px;
}
.conclusionmobile__text {
  color: white;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  letter-spacing: 0.5px;
}
.conclusionmobile__bggambar {
  position: absolute;
  width: 84px;
  left: 0px;
  bottom: 0px;
  height: 154.61px;
}
.conclusionmobile__logojne {
  width: 65px;
  height: 20.66px;
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
@media only screen and (max-width: 1260px) {
  .conclusion__bggambar {
    left: 0px;
  }
  .conclusion__text {
    right: 205px;
  }
  .conclusion__logojne {
    right: 20px;
  }
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
  .contactkomercemobile{
    display: grid;
    margin-bottom: 60px;
    height: unset;
    min-height: 500px;
    grid-template-columns: 1fr;
  }
  .contactkomerce {
    display: none;
  }
  .contactkomerce__left {
    display: grid;
    justify-content: center;
    align-content: center;
  }
  .contactkomerce__right {
    display: grid;
    justify-content: center;
    align-content: center;
  }
  .contactkomerce__left--text {
    position: unset;
  }
  .contactkomerce__left--link {
    z-index: 1;
    position: unset;
  }
  .contactkomerce__right--text {
    position: unset;
  }
  .contactkomerce__right--link {
    z-index: 1;
    position: unset;
  }
  .contactkomerce__left--img {
    width: 193px;
    height: 278.83px;
  }
  .contactkomerce__right--img {
    width: 230px;
    height: 273px;
  }
  .conclusion__text {
    top: 21px;
    right: 0px;
  }
  .conclusion__logojne {
    bottom: 40px;
    top: unset;
    right: 405px;
  }
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
@media only screen and (max-width: 700px) {
  .conclusion__text {
    font-size: 20px;
    width: 390px;
    right: 0px;
    top: 21px;
  }
  .conclusion__logojne {
    right: 228px;
    bottom: 40px;
  }
}
@media only screen and (max-width: 540px) {
  .testimoniwrapper--text {
    font-size: 18px;
    width: 25%;
    margin: 0px auto 40px;
  }
  .slidertestimoni {
    width: 85vw;
    min-height: 198px;
    height: 198px;
  }
  .slidertestimoni__head {
    border-radius: 16px 16px 0px 0px;
    height: 47px;
  }
  .slidertestimoni__head--text {
    font-size: 14px;
  }
  .slidertestimoni__head--wrapperimg {
    width: 53px;
    height: 53px;
    left: 45px;
    top: 12px;
  }
  .slidertestimoni__head--img {
    object-fit: contain;
    border-radius: 50%;
    width: 47px;
    height: 47px;
  }
  .slidertestimoni__body {
    border-radius: 0px 0px 16px 16px;
    padding: 20px 0px;
  }
  .slidertestimoni__body--text {
    font-size: 12px;
    width: 85%;
  }
  .conclusion {
    display: none;
  }
  .conclusionmobile {
    display: block;
  }
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
    display: block;
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
