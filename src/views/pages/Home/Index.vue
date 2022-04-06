<template>
  <div class="wrapperContainerHomePage">
    <section id="home" class="register-now">
      <div class="row container">
        <div class="col-lg-6 col-md-6 content">
          <h1 class="title">
            Juaranya Platform Kirim Barang, Mudah dan Murah dengan
            <span class="order">Komship</span>
          </h1>
          <p class="description">
            Dapatkan diskon ongkir mulai dari 25% dan GRATIS biaya retur!
            Pelajari lebih lanjut untuk dapat tawaran menarik
          </p>
          <div class="row hap-row1">
            <div class="col-md-4 col-4">
              <span class="hap-2000">{{ totalUser }}+</span>
            </div>
            <div class="col-md-8 col-8">
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
        <div class="col-lg-5 col-md-5 image-desktop pt-5 mt-5">
          <img
            :src="require('@/assets/img/hero/new-bg-hero.svg')"
            style="margin-right: 10px; margin-left: 43%"
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
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-4 col-11 service-title">
            <h2 class="title">Sering kirim barang?</h2>
          </div>
          <div class="col-lg-7 col-md-8 col-11 description">
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
                  {{ item.description }}
                </p>
                <p v-if="item.id === 5" class="text-black">*S&K berlaku.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="service-mobile">
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
        </div> -->
    <!-- new service mobile -->
    <section id="service-mobile">
      <carousel
        :autoplay="15000"
        :settings="settingscarousel"
        :wrapAround="true"
        :breakpoints="breakpoints"
        ref="carousel"
      >
        <slide v-for="item in service_items" :key="item.id">
          <div class="carousel__item">
            <div class="slidertestimoni">
              <div class="card content">
                <div class="card-content">
                  <img :src="item.image" class="icons" />
                  <h3 class="title-content-mobile">{{ item.title }}</h3>
                  <p class="description-content-mobile">
                    {{ item.description }}
                  </p>
                  <p v-if="item.id === 5" class="text-black"></p>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </carousel>
    </section>
    <!-- new service mobile -->

    <!-- conclusion -->
    <section class="conclusion">
      <div class="row conclusion-dekstop">
        <div class="col-lg-6 col-md-6 col-12">
          <p class="conclusion__text">
            Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
            pengiriman <span class="COD">COD dan Non-COD</span>
          </p>
        </div>
        <div class="col-lg-2 col-md-2 col-4 conclusion_logo">
          <div class="conclusion__wrapperlogo">
            <img
              :src="require('@/assets/img/logo/logo_jne.png')"
              class="conclusion__logo"
              alt="logo jne"
            />
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-4 conclusion_logo">
          <div class="conclusion__wrapperotheimg">
            <img
              :src="require('@/assets/img/logo/logo_sicepat.png')"
              alt="imgdata"
              class="conclusion__logo"
            />
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-4 conclusion_logo">
          <div class="conclusion__wrapperotheimg">
            <img
              :src="require('@/assets/img/logo/logo_idexpress.png')"
              alt="imgdata"
              class="conclusion__logo"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="conclusionmobile">
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
    </section> -->

    <!-- Benefit -->
    <section id="benefit">
      <div class="benefit">
        <div class="benefit-desktop">
          <div class="row benefit1">
            <div class="col-md-3 benefit_2">Benefit</div>
            <div class="col-md-3 kurir">JNE</div>
            <div class="col-md-3 kurir">SiCepat</div>
            <div class="col-md-3 kurir3">IDExpress</div>
          </div>
          <div class="row benefit1">
            <div class="col-md-3 benefit_4">Diskon Ongkir</div>
            <div class="col-md-3 benefit-content">Reg 25%</div>
            <div class="col-md-3 benefit-content">
              <li>
                <i class="material-icons li-benefit">brightness_1</i>Reg 30%
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>
                Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
              </li>
            </div>
            <div class="col-md-3 benefit-content">
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Reg 25%
                (>1/2 kg)
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>&lt;1/2 Kg
                bayar 1/2-nya * + diskon 15%
              </li>
            </div>
          </div>
          <div class="row benefit1">
            <div class="col-md-3 benefit_3">Biaya COD</div>
            <div class="col-md-3 benefit-content">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div class="col-md-3 benefit-content">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div class="col-md-3 benefit-content">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row benefit1">
            <div class="col-md-3 benefit_3">Diskon Biaya Retur</div>
            <div class="col-md-3 benefit-content">
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Gratis
                se-Jawa Bali
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Non Jawa
                Bali 50%
              </li>
            </div>
            <div class="col-md-3 benefit-content">Gratis se-lndonesia</div>
            <div class="col-md-3 benefit-content">
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Gratis
                se-Jawa Bali
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Non Jawa
                Bali 50%
              </li>
            </div>
          </div>
        </div>
        <div class="benefit-mobile">
          <nav class="benefit-nav" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a
                  :class="benefitContent === 'JNE' ? 'active' : ''"
                  @click="benefitTabs('JNE')"
                  >JNE</a
                >
              </li>
              <li class="breadcrumb-item">
                <a
                  :class="benefitContent === 'SICEPAT' ? 'active' : ''"
                  @click="benefitTabs('SICEPAT')"
                >
                  SiCepat
                </a>
              </li>
              <li class="breadcrumb-item">
                <a
                  :class="benefitContent === 'IDEXPRESS' ? 'active' : ''"
                  @click="benefitTabs('IDEXPRESS')"
                >
                  IDExpress
                </a>
              </li>
            </ol>
          </nav>
          <div class="row benefit1">
            <div class="col-6 benefit_2">Benefit</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 kurir">JNE</div>
            <div v-if="benefitContent === 'SICEPAT'" class="col-6 kurir">
              SiCepat
            </div>
            <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 kurir">
              IDExpress
            </div>
          </div>
          <div class="row benefit1">
            <div class="col-6 benefit_4">Diskon Ongkir</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 benefit-content">
              Reg 25%
            </div>
            <div
              v-if="benefitContent === 'SICEPAT'"
              class="col-6 benefit-content"
            >
              <li>
                <i class="material-icons li-benefit">brightness_1</i>Reg 30%
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>
                Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
              </li>
            </div>
            <div
              v-if="benefitContent === 'IDEXPRESS'"
              class="col-6 benefit-content"
            >
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Reg 25%
                (>1/2 kg)
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>&lt;1/2 Kg
                bayar 1/2-nya * + diskon 15%
              </li>
            </div>
          </div>
          <div class="row benefit1">
            <div class="col-6 benefit_3">Biaya COD</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 benefit-content">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div
              v-if="benefitContent === 'SICEPAT'"
              class="col-6 benefit-content"
            >
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div
              v-if="benefitContent === 'IDEXPRESS'"
              class="col-6 benefit-content"
            >
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row benefit1">
            <div class="col-6 benefit_3">Diskon Biaya Retur</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 benefit-content">
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Gratis
                se-Jawa Bali
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Non Jawa
                Bali 50%
              </li>
            </div>
            <div
              v-if="benefitContent === 'SICEPAT'"
              class="col-6 benefit-content"
            >
              Gratis se-lndonesia
            </div>
            <div
              v-if="benefitContent === 'IDEXPRESS'"
              class="col-6 benefit-content"
            >
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Gratis
                se-Jawa Bali
              </li>
              <li class="li-benefit">
                <i class="material-icons li-benefit">brightness_1</i>Non Jawa
                Bali 50%
              </li>
            </div>
          </div>
        </div>
        <div class="benefit-SK">*S&K berlaku</div>
      </div>
    </section>
    <!-- kurir-counter -->
    <section id="recommendation">
      <div class="head-rec container">Rekomendasi untuk Kamu</div>
      <div class="row row-kurir">
        <div class="col-lg-4 col-md-4 col-12 icon-counter">
          <img src="@/assets/img/partials/jne-counter.png" alt="jne counter" />
          <div class="subhead-kurir">
            Makin tenang kirim orderan dengan
            <span class="kurir-orange"
              >gerai terbanyak dan cakupan terluas</span
            >
            di Indonesia
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12 icon-counter">
          <img
            src="@/assets/img/partials/sicepat-counter.png"
            alt="sicepat counter"
          />
          <div class="subhead-kurir">
            Makin <span class="kurir-orange">untung</span> dan
            <span class="kurir-orange">hemat</span> kirim orderan bahkan ke
            pelosok Indonesia. Kirim pakai
            <span class="kurir-orange">Cargo</span> gak kalah
            <span class="kurir-orange">hemat</span>nya!
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12 icon-counter">
          <img
            src="@/assets/img/partials/idexpress-counter.png"
            alt="id express counter"
          />
          <div class="subhead-kurir">
            <span class="kurir-orange"
              >Cocok bagi pebisnis dengan paket ringan.</span
            >
            <span> kirim orderan makin hemat dan mantap</span>
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
      <div class="new-mode-alur-desktop">
        <div class="container new-mode-alur-desktop">
          <div class="row justify-content-left mb-5">
            <div class="col-md-5 px-3 text-left pt-3 head-alur-pengiriman">
              <span class="new-title-alur">
                Alur pengiriman menggunakan
                <span style="color: #ff6a3a !important">Komship</span>
              </span>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 mb-5">
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
                <div class="col-md-8 icon-alur-khusus">
                  <img :src="require('@/assets/img/icons/alur-icon1.png')" />
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <span class="title-content-alur"
                  >Order masuk dari pelanggan</span
                >
              </div>
            </div>
            <div class="col-md-3 mb-5">
              <div class="row justify-content-center mb-3">
                <div class="col-md-auto">
                  <span class="number-alur">2</span>
                </div>
                <div class="col-md-8 icon-alur-khusus">
                  <img :src="require('@/assets/img/icons/alur-icon2.png')" />
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <span class="title-content-alur"
                  >Seller menyiapkan orderan</span
                >
              </div>
            </div>
            <div class="col-md-3 mb-5">
              <div class="row justify-content-center mb-3">
                <div class="col-md-auto">
                  <span class="number-alur">3</span>
                </div>
                <div class="col-md-8 icon-alur-khusus">
                  <img :src="require('@/assets/img/icons/alur-icon3.png')" />
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <span class="title-content-alur"
                  >Seller memasukan data di dashboard Komship</span
                >
              </div>
            </div>
            <div class="col-md-3 mb-5">
              <div class="row justify-content-center mb-3">
                <div class="col-md-auto">
                  <span class="number-alur">4</span>
                </div>
                <div class="col-md-8 icon-alur-khusus">
                  <img :src="require('@/assets/img/icons/alur-icon4.png')" />
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <span class="title-content-alur"
                  >Ekspedisi menjemput barang ke lokasi seller</span
                >
              </div>
            </div>
            <div class="col-md-3 mb-5">
              <div class="row justify-content-center mb-3">
                <div class="col-md-auto">
                  <span class="number-alur">5</span>
                </div>
                <div class="col-md-8 icon-alur-khusus">
                  <img :src="require('@/assets/img/icons/alur-icon5.png')" />
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <span class="title-content-alur"
                  >Barang diterima pelanggan</span
                >
              </div>
            </div>
            <div class="col-md-3 mb-5">
              <div class="row justify-content-center mb-4">
                <div class="col-md-auto">
                  <span class="number-alur">6</span>
                </div>
                <div class="col-md-8 icon-alur-khusus">
                  <img :src="require('@/assets/img/icons/alur-icon6.png')" />
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <span class="title-content-alur"
                  >Non COD (selesai) / COD (uang diterima)</span
                >
              </div>
            </div>
            <div class="col-md-3 mb-5">
              <div class="row justify-content-center mb-3">
                <div class="col-md-auto">
                  <span class="number-alur">7</span>
                </div>
                <div class="col-md-8 icon-alur-khusus">
                  <img :src="require('@/assets/img/icons/alur-icon7.png')" />
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <span class="title-content-alur">Dana dicairkan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- New Alur Mobile -->
    <section>
      <div class="container new-mode-alur-mobile">
        <div class="row container justify-content-center mb-5">
          <div class="col-md-5 px-3 text-left">
            <span class="new-title-alur-mobile">
              Alur pengiriman menggunakan
              <span style="color: #ff6a3a !important">Komship</span>
            </span>
          </div>
        </div>

        <div class="row container justify-content-center row-alur-mobile">
          <div class="d-flex mb-5">
            <div>
              <span
                class="number-alur-mobile"
                style="padding-left: 13px; padding-right: 13px"
                >1</span
              >
            </div>
            <div class="d-flex align-items-center">
              <div class="icon-alur-mobile">
                <img :src="require('@/assets/img/icons/alur-icon1.png')" />
              </div>
              <div>
                <span class="title-content-alur-mobile"
                  >Order masuk dari pelanggan</span
                >
              </div>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="d-flex align-items-center">
              <div>
                <span class="title-content-alur-mobile"
                  >Seller menyiapkan orderan</span
                >
              </div>
              <div class="icon-alur-mobile">
                <img :src="require('@/assets/img/icons/alur-icon2.png')" />
              </div>
            </div>
            <div>
              <span class="number-alur-mobile">2</span>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div>
              <span class="number-alur-mobile">3</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="me-3 icon-alur-mobile">
                <img :src="require('@/assets/img/icons/alur-icon3.png')" />
              </div>
              <div>
                <span class="title-content-alur-mobile"
                  >Seller memasukan data di dashboard Komship</span
                >
              </div>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="d-flex align-items-center">
              <div>
                <span class="title-content-alur-mobile"
                  >Ekspedisi menjemput barang ke lokasi Seller</span
                >
              </div>
              <div class="icon-alur-mobile">
                <img :src="require('@/assets/img/icons/alur-icon4.png')" />
              </div>
            </div>
            <div>
              <span class="number-alur-mobile">4</span>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div>
              <span class="number-alur-mobile">5</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="icon-alur-mobile">
                <img :src="require('@/assets/img/icons/alur-icon5.png')" />
              </div>
              <div>
                <span class="title-content-alur-mobile"
                  >Barang diterima pelanggan</span
                >
              </div>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div class="d-flex align-items-center">
              <div>
                <span class="title-content-alur-mobile"
                  >Non COD (selesai) / COD (uang diterima)</span
                >
              </div>
              <div class="icon-alur-mobile">
                <img :src="require('@/assets/img/icons/alur-icon6.png')" />
              </div>
            </div>
            <div>
              <span class="number-alur-mobile">6</span>
            </div>
          </div>

          <div class="d-flex mb-5">
            <div>
              <span class="number-alur-mobile">7</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="me-3 icon-alur-mobile">
                <img :src="require('@/assets/img/icons/alur-icon7.png')" />
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
    <!-- <section id="feature" class="service">
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
    </section> -->

    <!-- new feature -->

    <section id="feature" class="container-fluid">
      <div class="feature">
        <div class="container">
          <div class="head-feature">Fitur Tambahan</div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="row justify-content-center">
              <div class="col-md-3 icon-newfeature">
                <img
                  src="@/assets/img/partials/produk-terlaris.png"
                  alt="produk terlaris"
                />
              </div>
              <div class="col-md-7">
                <div class="subhead-feature">Produk Terlaris</div>
                <div class="content-feature">
                  Jika kamu memiliki produk dengan variasi yang berbeda, maka
                  fitur produk terlaris ini dapat membantu kamu mengetahui
                  produk mana yang menjadi best seller dalam kurun waktu 1 bulan
                  atau 7 hari terakhir.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="row justify-content-center">
              <div class="col-md-3 icon-newfeature">
                <img
                  src="@/assets/img/partials/customer-loyal.png"
                  alt="customer loyal"
                />
              </div>
              <div class="col-md-7">
                <div class="subhead-feature">Customer Loyal</div>
                <div class="content-feature">
                  Merupakan data Customer yang sering melakukan order kembali
                  (repeat order). Dengan mengetahui Customer Loyal kita, maka
                  proses orderan akan semakin cepat.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="row justify-content-center">
              <div class="col-md-3 icon-newfeature">
                <img
                  src="@/assets/img/partials/top-admin-order.png"
                  alt="top admin order"
                />
              </div>
              <div class="col-md-7">
                <div class="subhead-feature">Top Admin Order</div>
                <div class="content-feature">
                  Fitur yang akan mempermudah para pebisnis memantau
                  produktifitas para admin dengan melihat data akumulasi
                  performa masing-masing admin yang ada. Makin mudah juga untuk
                  mengambil keputusan seperti pemberian bonus dan meningkatkan
                  semangat kerja para admin.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- new feature end -->
    <!-- new feature mobile -->
    <section id="feature-mobile" class="container">
      <div class="feature-mobile">
        <div class="head-feature-mobile">
          <div class="head-feature">Fitur Tambahan</div>
        </div>
        <div class="row container justify-content-center mb-3">
          <div class="col-6 icon-newfeature">
            <img
              src="@/assets/img/partials/produk-terlaris.png"
              alt="produk terlaris"
            />
          </div>
          <div class="col-6 subhead-feature-mobile">
            <div class="subhead-feature">Produk Terlaris</div>
          </div>
          <div class="col-12">
            <div class="content-feature">
              Jika kamu memiliki produk dengan variasi yang berbeda, maka fitur
              produk terlaris ini dapat membantu kamu mengetahui produk mana
              yang menjadi best seller dalam kurun waktu 1 bulan atau 7 hari
              terakhir.
            </div>
          </div>
        </div>
        <div class="row container justify-content-center mb-3">
          <div class="col-6 subhead-feature-mobile">
            <div class="subhead-feature">Customer Loyal</div>
          </div>
          <div class="col-6 icon-newfeature">
            <img
              src="@/assets/img/partials/customer-loyal.png"
              alt="customer loyal"
            />
          </div>
          <div class="col-12">
            <div class="content-feature">
              Merupakan data Customer yang sering melakukan order kembali
              (repeat order). Dengan mengetahui Customer Loyal kita, maka proses
              orderan akan semakin cepat.
            </div>
          </div>
        </div>
        <div class="row container justify-content-center mb-3">
          <div class="col-5 icon-newfeature">
            <img
              src="@/assets/img/partials/top-admin-order.png"
              alt="top admin order"
            />
          </div>
          <div class="col-7 subhead-feature-mobile">
            <div class="subhead-feature">Top Admin Order</div>
          </div>
          <div class="col-12">
            <div class="content-feature">
              Fitur yang akan mempermudah para pebisnis memantau produktifitas
              para admin dengan melihat data akumulasi performa masing-masing
              admin yang ada. Makin mudah juga untuk mengambil keputusan seperti
              pemberian bonus dan meningkatkan semangat kerja para admin.
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- new feature mobile end -->
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
    <div class="row justify-content-center testimoniwrapper--text">
      <div class="col-lg-6 col-md-6 col-11">
        <span style="color: #ff6a3a">Komship</span>&nbsp;telah dipercaya oleh
        Pebisnis dan UMKM di Indonesia
      </div>
    </div>
    <div id="testimoniwrapper" class="testimoniwrapper">
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
          <Navigation>
            <template #next>
              <span> <i class="chevron material-icons">chevron_right</i> </span>
            </template>
            <template #prev>
              <span> <i class="chevron material-icons">chevron_left</i> </span>
            </template>
          </Navigation>
          <Pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
<script src="./Home.js"></script>
<style src="./Home.css"></style>
