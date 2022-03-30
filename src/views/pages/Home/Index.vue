<template>
  <div class="wrapperContainerHomePage">
    <section id="home" class="register-now container">
      <div class="row">
        <div class="col-lg-6 col-md-7 content pt-5">
          <h1 class="title">
            Juaranya Platform Kirim Barang, Mudah dan Murah dengan
            <span class="order">Komship</span>
          </h1>
          <p class="description">
            Dapatkan diskon ongkir mulai dari 25% dan GRATIS biaya retur!
            Pelajari lebih lanjut untuk dapat tawaran menarik
          </p>
          <div class="row hap-row1">
            <div class="col-md-4">
              <span class="hap-2000">2.000+</span>
            </div>
            <div class="col-md-8">
              <span class="hap-description"
                >Pebisnis online sudah bergabung dengan
                <span class="hap-komship">Komship</span></span
              >
            </div>
          </div>
          <button
            class="btn btn-primary btn-register-now px-5"
            @click="openWindow(defaultRedirectURL)"
          >
            Mulai Sekarang
          </button>
        </div>
        <div class="col-lg-5 col-md-7 image-desktop pt-5 mt-5">
          <img
            :src="require('@/assets/img/hero/new-bg-hero.svg')"
            style="margin-right: 10px; margin-left: 170px"
          />
        </div>
        <div class="col-lg-5 col-md-6 image-mobile mt-4">
          <img :src="require('@/assets/img/hero/new-bg-hero.svg')" />
        </div>
      </div>
    </section>
    <!-- service -->
    <section id="service" class="service">
      <div class="container pt-4">
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
            class="col-xl-4 col-lg-4 col-md-6"
            v-for="item in service_items"
            :key="item.id"
          >
            <div class="card content">
              <div class="card-body">
                <img :src="item.image" class="icons" />
                <h3 class="title-content">{{ item.title }}</h3>
                <p class="description-content">
                  {{ item.description }}</p>
                  <p v-if="item.id === 5" class="text-black"
                    >*S&K berlaku.</p
                  >
              </div>
            </div>
          </div>
        </div>
        <div class="service-mobile">
          <div v-for="item in service_items" :key="item.id">
            <div class="card mx-3">
              <div class="card-body">
                <img :src="item.image" class="icons mb-3" />
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.description }}
                  <span v-if="item.id === 5" class="text-black"
                    >*S&K berlaku.</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- conclusion -->
    <section class="conclusion">
      <div class="conclusion__rect conclusion__rect1"></div>
      <div class="conclusion__rect conclusion__rect2"></div>
      <div class="conclusion__rect conclusion__rect3"></div>
      <!-- <img
        :src="require('@/assets/img/background/bg-gambar.png')"
        alt="bg gambar"
        class="conclusion__bggambar"
      /> -->
      <p class="conclusion__text">
        Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
        pengiriman <span class="COD">COD dan Non-COD</span>
      </p>
      <div class="conclusion__wrapperlogo">
        <img
          :src="require('@/assets/img/logo/logo_jne.png')"
          class="conclusion__logojne"
          alt="logo jne"
        />
        <p class="conclusion__imgtext">Segera hadir :</p>
        <div class="conclusion__wrapperotheimg">
          <img
            :src="require('@/assets/img/logo/logo-id-express.svg')"
            alt="imgdata"
            class="conclusion__logoidx"
          />
          <img
            :src="require('@/assets/img/logo/logo-sicepat.svg')"
            alt="imgdata"
            class="conclusion__logosicepat"
          />
        </div>
      </div>
    </section>
    <section class="conclusionmobile">
      <img
        :src="require('@/assets/img/person/conclusion-person-mobile.png')"
        alt="bg gambar"
        class="conclusionmobile__bggambar"
      />
      <div class="conclusionmobile__content">
        <p class="conclusionmobile__text">
          Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
          pengiriman COD dan non COD
        </p>
        <div>
          <img
            :src="require('@/assets/img/logo/logo_jne.png')"
            class="conclusionmobile__logojne"
            alt="logo jne"
          />
          <div class="d-flex">
            <span style="font-size: 14px; color: #ffffff">Segera Hadir: </span>
            <img
              :src="require('@/assets/img/logo/logo-id-express.svg')"
              alt="logo id express"
              style="width: 65px"
            />
            <img
              :src="require('@/assets/img/logo/logo-sicepat.svg')"
              alt="logo sicepat"
              style="width: 100px"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- alur pengiriman -->
    <section id="alur" class="feature mt-4">
      <!-- <div class="container">
        <div class="row">
          <div class="col-md-1 image-mobile"></div>
          <div class="col-md-6 content">
            <h2 class="title-content">Alur pengiriman</h2>
            <h2 class="title-content">
              menggunakan
              <span class="order" style="color: #fba63c">Komship</span>
            </h2>
            <div class="row mt-5">
              <div
                v-for="(item, idx) in services_item"
                :key="item.id"
                class="alur__contentwrap"
              >
                <div class="alur__content">
                  <div class="alur__content--icon"></div>
                  <h5 class="alur__content--text">{{ item.text }}</h5>
                </div>
                <img
                  v-if="services_item.length - 1 !== idx"
                  :src="item.gambar"
                  class="icons"
                />
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
      </div> -->

      <!-- New Alur Desktop -->
      <div class="container new-mode-alur-desktop">
        <div class="row justify-content-center mb-5">
          <div class="col-md-5 px-3 text-center mt-5 pt-5">
            <span class="new-title-alur">
              Alur pengiriman menggunakan
              <span style="color: #ff6a3a !important">Komship</span>
            </span>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-4 mb-5">
            <div class="row text-center">
              <div class="col-md-auto">
                <span
                  class="number-alur"
                  style="
                    padding-left: 18px;
                    padding-right: 18px;
                    margin-right: -25px;
                    margin-left: 35px;
                  "
                  >1</span
                >
              </div>
              <div class="col-md-8">
                <img
                  style="margin-top: -30px"
                  :src="require('@/assets/img/icons/icon-alur-1.svg')"
                />
              </div>
            </div>
            <div class="row text-center">
              <span class="title-content-alur" style="margin-top: -17px"
                >Order masuk dari customer</span
              >
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="row justify-content-center mb-3">
              <div class="col-md-auto">
                <span class="number-alur">2</span>
              </div>
              <div class="col-md-8">
                <img :src="require('@/assets/img/icons/icon-alur-2.svg')" />
              </div>
            </div>
            <div class="row text-center">
              <span class="title-content-alur">Seller menyiapkan orderan</span>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="row justify-content-center mb-3">
              <div class="col-md-auto">
                <span class="number-alur">3</span>
              </div>
              <div class="col-md-8">
                <img :src="require('@/assets/img/icons/icon-alur-3.svg')" />
              </div>
            </div>
            <div class="row text-center">
              <span class="title-content-alur"
                >Seller meginput data di Komship</span
              >
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="row justify-content-center mb-3">
              <div class="col-md-auto">
                <span class="number-alur">4</span>
              </div>
              <div class="col-md-8">
                <img :src="require('@/assets/img/icons/icon-alur-4.svg')" />
              </div>
            </div>
            <div class="row text-center">
              <span class="title-content-alur"
                >Ekspedisi menjemput barang ke lokasi seller</span
              >
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="row justify-content-center mb-3">
              <div class="col-md-auto">
                <span class="number-alur">5</span>
              </div>
              <div class="col-md-8">
                <img :src="require('@/assets/img/icons/icon-alur-5.svg')" />
              </div>
            </div>
            <div class="row text-center">
              <span class="title-content-alur">Barang diterima customer</span>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="row justify-content-center mb-4">
              <div class="col-md-auto">
                <span class="number-alur">6</span>
              </div>
              <div class="col-md-8">
                <img :src="require('@/assets/img/icons/icon-alur-6.svg')" />
              </div>
            </div>
            <div class="row text-center">
              <span class="title-content-alur"
                >Non COD (selesai) / COD (uang diterima)</span
              >
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="row justify-content-center mb-3">
              <div class="col-md-auto">
                <span class="number-alur">7</span>
              </div>
              <div class="col-md-8">
                <img :src="require('@/assets/img/icons/icon-alur-7.svg')" />
              </div>
            </div>
            <div class="row text-center">
              <span class="title-content-alur">Dana dicairkan</span>
            </div>
          </div>
        </div>
      </div>

      <!-- New Alur Mobile -->
      <div class="container new-mode-alur-mobile">
        <div class="row justify-content-center mb-5">
          <div class="col-md-5 px-3 text-center">
            <span class="new-title-alur">
              Alur pengiriman menggunakan
              <span style="color: #ff6a3a !important">Komship</span>
            </span>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="d-flex mb-5">
            <div>
              <span
                class="number-alur-mobile"
                style="padding-left: 13px; padding-right: 13px"
                >1</span
              >
            </div>
            <div class="d-flex align-items-center">
              <div>
                <img :src="require('@/assets/img/icons/icon-alur-1.svg')" />
              </div>
              <div style="margin-left: -10px">
                <span class="title-content-alur-mobile"
                  >Order masuk dari customer</span
                >
              </div>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="d-flex align-items-center">
              <div class="ms-2">
                <span class="title-content-alur-mobile"
                  >Seller menyiapkan orderan</span
                >
              </div>
              <div>
                <img :src="require('@/assets/img/icons/icon-alur-2.svg')" />
              </div>
            </div>
            <div>
              <span class="number-alur-mobile">2</span>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="me-3">
              <span class="number-alur-mobile">3</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="me-3">
                <img :src="require('@/assets/img/icons/icon-alur-3.svg')" />
              </div>
              <div style="margin-left: -10px">
                <span class="title-content-alur-mobile"
                  >Seller meginput data di Komship</span
                >
              </div>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="d-flex align-items-center">
              <div class="ms-2">
                <span class="title-content-alur-mobile"
                  >Ekspedisi menjemput barang ke lokasi seller</span
                >
              </div>
              <div>
                <img
                  :src="require('@/assets/img/icons/icon-alur-4.svg')"
                  style="width: 300px"
                />
              </div>
            </div>
            <div>
              <span class="number-alur-mobile">4</span>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="me-3">
              <span class="number-alur-mobile">5</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="me-3">
                <img :src="require('@/assets/img/icons/icon-alur-5.svg')" />
              </div>
              <div style="margin-left: -10px">
                <span class="title-content-alur-mobile"
                  >Barang diterima customer</span
                >
              </div>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="d-flex align-items-center">
              <div class="ms-2">
                <span class="title-content-alur-mobile"
                  >Non COD (selesai) / COD (uang diterima)</span
                >
              </div>
              <div>
                <img
                  :src="require('@/assets/img/icons/icon-alur-6.svg')"
                  style="width: 300px"
                />
              </div>
            </div>
            <div>
              <span class="number-alur-mobile">6</span>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="me-3">
              <span class="number-alur-mobile">7</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="me-3">
                <img :src="require('@/assets/img/icons/icon-alur-7.svg')" />
              </div>
              <div style="margin-left: -10px">
                <span class="title-content-alur-mobile">Dana dicairkan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- feature -->
    <section id="feature" class="service">
      <div class="container pt-4">
        <h2 class="title">Fitur Tambahan</h2>
        <div class="service-mobile">
          <carousel :items-to-show="1.25">
            <slide v-for="item in service_item" :key="item.id">
              <div
                class="card content"
                style="background-color: #ff6a3a border-radius: 24px;width:338px; height:350px; margin-right: 10px;"
              >
                <div
                  class="card-body"
                  style="
                    background-color: #ff6a3a;
                    border-radius: 24px;
                    display: grid;
                    align-items: center;
                    padding: 1rem 1rem 0px;
                  "
                >
                  <img
                    :src="item.image"
                    class="icons"
                    style="
                      width: 100%;
                      height: 100%;
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
            </slide>
            <template #addons>
              <Pagination />
            </template>
          </carousel>
        </div>
        <div class="row mt-5 service-desktop">
          <div
            class="col-lg-4 col-md-6"
            v-for="item in service_item"
            :key="item.id"
          >
            <div
              class="card content"
              style="background-color: #ff6a3a border-radius: 24px;width:338px; height:350px; justify-content: center; margin: 0px auto 1em;"
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
      <div class="contactkomerce__right">
        <img
          :src="require('@/assets/img/person/contactleft.png')"
          class="contactkomerce__left--img"
        />
        <img
          :src="require('@/assets/img/person/contactright.png')"
          class="contactkomerce__right--img"
        />
        <div class="contactkomerce__right--content">
          <h5 class="contactkomerce__right--text">
            Percayakan Pengiriman Ordermu Pada Komship!
          </h5>
          <a
            class="contactkomerce__right--link"
            :href="defaultRedirectURL"
            onClick="fbq('track', 'Lead')"
            target="_blank"
          >
            <span class="contactkomerce__right--link-text"
              >Daftar Sekarang</span
            >
          </a>
        </div>
      </div>
    </section>

    <!-- testimoni -->
    <div id="testimoniwrapper" class="testimoniwrapper">
      <h2 class="testimoniwrapper--text">
        <span style="color: #ff6a3a">Komship</span>&nbsp;telah dipercaya oleh
        UMKM
      </h2>
      <carousel
        :autoplay="15000"
        :settings="settingscarousel"
        :wrapAround="true"
        :breakpoints="breakpoints"
      >
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
                <p class="slidertestimoni__body--text">
                  {{ item.description }}
                </p>
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
<script src="./Home.js"></script>
<style src="./Home.css"></style>
