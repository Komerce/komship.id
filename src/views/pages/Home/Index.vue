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
                <span style="color: #f95031">Komship</span>
              </span>
            </div>
            <button
              class="btn btn-primary btn-register-now"
              @click="openWindow('https://partner.komerce.id/komship-register')"
            >
              Mulai Sekarang
            </button>
          </div>
          <div class="col-md-6 image-desktop">
            <img :src="require('@/assets/img/hero/new-bg-hero.svg')" />
          </div>
        </div>
      </div>
    </section>
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
                  <h3 class="title">{{ item.title }}</h3>
                  <p class="description">{{ item.description }}</p>
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
    <section class="benefit container">
      <div class="card benefit-head">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6 content">
              Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
              pengiriman <span style="color: #f95031">COD dan Non-COD</span>
            </div>
            <div class="col-lg-6 d-flex justify-between">
              <img
                class="logo"
                :src="require('@/assets/img/logo/logo_jne.png')"
              />
              <img
                class="logo"
                :src="require('@/assets/img/logo/logo_sicepat.png')"
              />
              <img
                class="logo"
                :src="require('@/assets/img/logo/logo_idexpress.png')"
              />
            </div>
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
        </div>
        <div class="row">
          <div class="col-md-3 p-4 head">Biaya COD</div>
          <div class="col-md-3 p-4">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div class="col-md-3 p-4">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div class="col-md-3 p-4">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 p-4 head">Diskon Biaya Retur</div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">Gratis se-Jawa Bali</li>
            <li class="list-benefit">Non Jawa Bali 50%</li>
          </div>
          <div class="col-md-3 p-4">Gratis se-lndonesia</div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">Gratis se-Jawa Bali</li>
            <li class="list-benefit">Non Jawa Bali 50%</li>
          </div>
        </div>
      </div>
      <div class="benefit-table-mobile">
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
        <div class="row">
          <div class="col-6 p-3 head">Benefit</div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3 subhead">
            JNE
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3 subhead">
            SiCepat
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3 subhead">
            IDExpress
          </div>
        </div>
        <div class="row">
          <div class="col-6 p-3 head">Diskon Ongkir</div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3">Reg 25%</div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3">
            <li class="list-benefit">Reg 30%</li>
            <li class="list-benefit">
              Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
            </li>
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            <li class="list-benefit">Reg 25% (>1/2 kg)</li>
            <li class="list-benefit">
              &lt;1/2 Kg bayar 1/2-nya * + diskon 15%
            </li>
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
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            2.8%
            <div>(PPN ditanggung Komship)</div>
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
              <span class="content">
                Makin untung dan hemat kirim orderan bahkan ke pelosok
                Indonesia. Kirim pakai Cargo gak kalah hematnya!
              </span>
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
              <span class="content">
                Cocok bagi pebisnis dengan paket ringan. kirim orderan makin
                hemat dan mantap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="alur" class="flow">
      <div class="container">
        <h3>
          Alur pengiriman menggunakan
          <span style="color: #f95031">Komship</span>
        </h3>
        <div class="row justify-content-center">
          <div
            v-for="item in flow_items"
            :key="item.id"
            class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0"
          >
            <div class="number">
              <span>{{ item.id }}</span>
            </div>
            <div class="image">
              <img :src="item.image" />
            </div>
            <div class="description">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="feature" class="opsional-feature">
      <div class="container mt-4">
        <h3>Fitur Tambahan</h3>
        <div class="row">
          <div class="col-lg-7 col-12">
            <div v-for="item in feature_items" :key="item.id" class="d-flex">
              <img :src="item.image" style="width: 30%" />
              <div class="content">
                <span class="title">{{ item.title }}</span>
                <br />
                <span class="description">{{ item.description }}</span>
              </div>
            </div>
          </div>
          <div class="col-lg-5 image-feature">
            <img
              :src="require('@/assets/img/partials/bg-opsional-feature.svg')"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="conclusion">
      <img
        class="bg-model-left"
        src="@/assets/img/hero/model-conclusion-left.svg"
      />
      <div class="content">
        <h3>Percayakan Pengiriman Orderanmu Pada Komship!</h3>
        <br />
        <button
          class="btn btn-primary btn-register-now"
          @click="openWindow('https://partner.komerce.id/komship-register')"
        >
          Daftar sekarang
        </button>
      </div>
      <img
        class="bg-model-right"
        src="@/assets/img/hero/model-conclusion-right.svg"
      />
    </section>
    <section class="testimoni">
      <h3 class="title">
        <span style="color: #f95031">Komship</span> telah dipercaya oleh
        Pebisnis dan UMKM di Indonesia
      </h3>
      <carousel :itemsToShow="2" :autoplay="3000" :wrap-around="true">
        <slide v-for="item in testimoni_items" :key="item.id">
          <div class="card carousel__item">
            <div class="head">
              <div class="profile">
                <img :src="item.image" />
              </div>
              <span class="name">{{ item.name }}</span>
            </div>
            <div class="content">
              {{ item.description }}
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
    </section>
  </div>
</template>
<script src="./Home.js"></script>
<style src="./Home.css"></style>
