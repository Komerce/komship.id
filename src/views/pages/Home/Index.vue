<template>
  <teleport to="head">
    <component :is="script" type="application/ld+json">
      {"@context":"https://schema.org/", "@type":"WebSite", "name":"Komship",
      "description":"Komship merupakan platform layanan pengiriman yang
      bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode
      COD atau Non-COD tanpa batas minimum
      pengiriman.","url":"https://komship.id/", "image":{"@type":"ImageObject",
      "url":"https://komship.id/img/komship.png", "height":"720",
      "width":"1280"},"sameAs":["https://www.facebook.com/komship/",
      "https://www.instagram.com/komship/"],
      "potentialAction":{"@type":"SearchAction",
      "target":"https://komship.id/pencarian?q={search_term_string}",
      "query-input":"required name=search_term_string"}}
    </component>
  </teleport>
  <div style="background-color: #f6f6f9; padding-bottom: 50px">
    <section id="home" style="background-color: #ffffff">
      <div class="register-now container">
        <div class="row">
          <div
            class="col-md-6 content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 class="title">
              Juaranya Platform Kirim Barang, Mudah dan Murah dengan
              <span style="color: #f95031">Komship</span>
            </h2>
            <p class="description">
              Dapatkan diskon ongkir mulai dari 25% dan GRATIS biaya retur
              se-Indonesia! Pelajari lebih lanjut untuk dapat tawaran menarik
            </p>
            <div class="info">
              <span class="number">{{ totalPartners }}+</span>
              <span class="label"
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
          <div
            class="col-md-6 image-desktop"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img :src="require('@/assets/img/hero/new_hero.png')" />
          </div>
        </div>
      </div>
    </section>
    <section id="service" class="service">
      <div class="container">
        <div class="row mb-4" data-aos="fade-up" data-aos-duration="1500">
          <div class="col-md-5 align-self-center">
            <h3 class="title">Sering kirim barang?</h3>
          </div>
          <div class="col-md-7 description">
            Sudah saatnya kamu beralih ke platform yang bisa memberikan berlipat
            keuntungan dan kenyamanan dalam melakukan pengiriman barang. Komship
            kini hadir untuk memudahkan pengiriman kamu dengan berbagai benefit
            TANPA MINIMUM JUMLAH PENGIRIMAN.
          </div>
        </div>
        <div class="row mt-5 service-desktop">
          <div
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            v-for="item in service_items"
            :key="item.id"
          >
            <div class="card content">
              <div class="card-body">
                <img :src="item.image" class="icons" /><br />
                <span class="title-content">{{ item.title }}</span>
                <p class="description-content">
                  {{ item.description }}
                  <string style="color: #222222" v-if="item.id === 5"
                    >*S&K berlaku.</string
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="service-mobile" data-aos="zoom-in" data-aos-duration="1500">
          <carousel :autoplay="2000" :wrap-around="true">
            <slide v-for="item in service_items" :key="item.id">
              <div class="card">
                <div class="card-body">
                  <img :src="item.image" class="icons" /><br />
                  <span class="title-content">{{ item.title }}</span>
                  <p class="description">
                    {{ item.description }}
                    <string style="color: #222222" v-if="item.id === 5"
                      >*S&K berlaku.</string
                    >
                  </p>
                </div>
              </div>
            </slide>
            <template #addons>
              <Navigation>
                <template #next>
                  <img
                    :src="require('@/assets/img/icons/arrow-right-white.svg')"
                  />
                </template>
                <template #prev>
                  <img
                    :src="require('@/assets/img/icons/arrow-left-white.svg')"
                  />
                </template>
              </Navigation>
            </template>
          </carousel>
        </div>
      </div>
    </section>
    <section class="benefit container">
      <div
        class="card benefit-head"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
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
      <div class="benefit-table-desktop">
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-3 p-4 head">Benefit</div>
          <div class="col-md-3 p-4 subhead">JNE</div>
          <div class="col-md-3 p-4 subhead">SiCepat</div>
          <div class="col-md-3 p-4 subhead">IDExpress</div>
        </div>
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-3 p-4 head">Diskon Ongkir</div>
          <div class="col-md-3 p-4">Reg 25%</div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">Reg 30%</li>
            <li class="list-benefit">
              Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
            </li>
          </div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">Reg 25% (>1/2 kg)</li>
            <li class="list-benefit">
              &lt;1/2 Kg bayar 1/2-nya * + diskon 15%
            </li>
          </div>
        </div>
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
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
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-3 p-4 head">Biaya Retur</div>
          <div class="col-md-3 p-4">Gratis se-lndonesia*</div>
          <div class="col-md-3 p-4">Gratis se-lndonesia*</div>
          <div class="col-md-3 p-4">Gratis se-lndonesia*</div>
        </div>
      </div>
      <div class="benefit-table-mobile">
        <div
          class="mt-4 mb-2"
          style="text-align: left !important"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <button
            :class="benefitContent === 'JNE' ? 'active' : ''"
            class="btn btn-sm btn-menu"
            @click="benefitTabs('JNE')"
          >
            JNE
          </button>
          <button
            :class="benefitContent === 'SICEPAT' ? 'active' : ''"
            class="btn btn-sm btn-menu"
            @click="benefitTabs('SICEPAT')"
          >
            SiCepat
          </button>
          <button
            :class="benefitContent === 'IDEXPRESS' ? 'active' : ''"
            class="btn btn-sm btn-menu"
            @click="benefitTabs('IDEXPRESS')"
          >
            IDExpress
          </button>
        </div>
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
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
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
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
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
          <div class="col-6 p-3 head">Biaya COD</div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
        </div>
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
          <div class="col-6 p-3 head">Biaya Retur</div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3">
            Gratis se-lndonesia*
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3">
            Gratis se-lndonesia*
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            Gratis se-lndonesia*
          </div>
        </div>
      </div>
      <span
        style="font-weight: 500"
        data-aos="fade-right"
        data-aos-duration="1500"
        >*S&K berlaku</span
      >
    </section>
    <section class="recommend mt-5">
      <div class="container">
        <h3
          class="d-block text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Rekomendasi untuk Kamu
        </h3>
        <div class="row justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/jne-counter.png" />
              </div>
              <span class="content">
                Makin tenang kirim orderan dengan
                <span style="color: #f95031">
                  gerai terbanyak dan cakupan terluas
                </span>
                di Indonesia
              </span>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/sicepat-counter.png" />
              </div>
              <span class="content">
                Makin <span style="color: #f95031">untung</span> dan
                <span style="color: #f95031">hemat</span> kirim orderan bahkan
                ke pelosok Indonesia. Kirim pakai
                <span style="color: #f95031">Cargo</span> gak kalah
                <span style="color: #f95031">hemat</span>nya!
              </span>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/idexpress-counter.png" />
              </div>
              <span class="content">
                <span style="color: #f95031"
                  >Cocok bagi pebisnis dengan paket ringan.</span
                >
                Kirim orderan makin hemat dan mantap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="alur" class="flow pb-4">
      <div class="container">
        <h3 data-aos="fade-up" data-aos-duration="1500">
          Alur pengiriman menggunakan
          <span style="color: #f95031">Komship</span>
        </h3>
        <div class="content-desktop row justify-content-center">
          <div
            v-for="item in flow_items"
            :key="item.id"
            class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
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
        <div class="content-mobile">
          <div v-for="item in flow_items" :key="item.id">
            <div
              v-if="item.id % 2 === 1"
              class="d-flex"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <div class="number-mobile">
                <span>{{ item.id }}</span>
              </div>
              <div class="image-mobile">
                <img :src="item.image" />
              </div>
              <div class="description-mobile">
                <span>{{ item.title }}</span>
              </div>
            </div>
            <div
              v-else
              class="d-flex"
              data-aos="zoom-in-left"
              data-aos-duration="1500"
            >
              <div class="description-mobile">
                <span>{{ item.title }}</span>
              </div>
              <div class="image-mobile d-flex justify-content-end">
                <img :src="item.image" />
              </div>
              <div class="number-mobile">
                <span>{{ item.id }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="feature" class="feature">
      <div class="container accordion mt-4" id="accordion-feature">
        <h3
          data-aos="fade-up"
          data-aos-duration="1500"
          style="font-size: 32px; text-align: -webkit-left; !important"
          class="fitur"
        >
          Fitur
        </h3>
        <div class="d-flex mb-5">
          <button
            id="div1"
            class="btn-feature m-2 active"
            type="button"
            style="display: block"
            @click="replace('div4', 'div3')"
          >
            Fitur Unggulan
          </button>
          <button
            id="div2"
            class="btn-feature px- m-2"
            type="button"
            style="display: block"
            @click="replace('div3', 'div4')"
          >
            Fitur Tambahan
          </button>
        </div>
        <div id="div3" style="display: block">
          <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-5">
              <div @click="replace2('dataoto', 'kendala', 'order')">
                <button id="arrow-btn" class="acc-feature d-flex mb-3">
                  <div class="subhead-feature">Input Order Masal</div>
                  <div class="arrow-feature mx-4"></div>
                </button>
                <p>
                  Anti ribet untuk kamu yang harus input orderan cukup banyak
                  setiap hari, Gak perlu lagi input data manual satu persatu.
                </p>
              </div>
              <div @click="replace2('order', 'kendala', 'dataoto')">
                <button id="arrow-btn" class="acc-feature d-flex mb-3">
                  <div class="subhead-feature">
                    Tarik Data Otomatis dan Mudah
                  </div>
                  <div class="arrow-feature mx-4"></div>
                </button>
                <p>
                  Data di dashboard akan semakin mudah kamu olah dengan
                  memanfaatkan menu download. Kamu tinggal pilih klasifikasi
                  data yang dibutuhkan.
                </p>
              </div>
              <div @click="replace2('order', 'dataoto', 'kendala')">
                <button id="arrow-btn" class="acc-feature d-flex mb-3">
                  <div class="subhead-feature">Pantau Kendala Pengiriman</div>
                  <div class="arrow-feature mx-4"></div>
                </button>
                <p>
                  Kendala pengiriman akan makin mudah dan cepat teratasi karena
                  terhubung langsung dengan ekspedisi terkait.
                </p>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 image-unggulan">
              <div
                id="order"
                class="image-feature-unggulan"
                style="display: block"
              >
                <img src="../../../assets/img/background/bg-ordermasal.png" />
              </div>
              <div
                id="dataoto"
                class="image-feature-unggulan"
                style="display: none"
              >
                <img src="../../../assets/img/background/bg-dataorder.png" />
              </div>
              <div
                id="kendala"
                class="image-feature-unggulan"
                style="display: none"
              >
                <img src="../../../assets/img/background/bg-kendala.png" />
              </div>
            </div>
          </div>
        </div>
        <div id="div4" style="display: none">
          <div class="col-lg-6 col-12">
            <div
              v-for="item in feature_items"
              :key="item.id"
              class="d-flex"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <img :src="item.image" style="width: 30%" />
              <div class="content">
                <span class="title">{{ item.title }}</span>
                <br />
                <span class="description">{{ item.description }}</span>
              </div>
            </div>
          </div>
          <img
            class="image-feature"
            data-aos="zoom-in"
            data-aos-duration="1500"
            :src="require('@/assets/img/background/bg-newfeature.png')"
          />
        </div>
      </div>
    </section>
    <section id="feature-mobile">
      <div class="feature-mobile container mb-5">
        <div class="head-feature-mobile text-center">
          <h2
            class="head-feature"
            style="font-family: Poppins; font-size: 24px; font-weight: 700"
          >
            Fitur
          </h2>
        </div>
        <div class="d-flex mb-5">
          <button
            id="div1"
            class="btn-feature m-2 active"
            type="button"
            style="display: block"
            @click="replace('mbl-tambahan', 'mbl-unggulan')"
          >
            Fitur Unggulan
          </button>
          <button
            id="div2"
            class="btn-feature px- m-2"
            type="button"
            style="display: block"
            @click="replace('mbl-unggulan', 'mbl-tambahan')"
          >
            Fitur Tambahan
          </button>
        </div>
        <div id="mbl-unggulan" style="display: block">
          <div class="row justify-content-between mb-3">
            <div class="col-6 text-left icon-newfeature">
              <img
                src="@/assets/img/background/mbl-order.svg"
                alt="produk terlaris"
              />
            </div>
            <div class="col-6 text-right subhead-feature-mobile">
              <div class="subhead-feature">Input Order Masal</div>
            </div>
            <div class="row justify-content-center mt-4">
              <div class="col-11">
                <div class="content-feature">
                  Jika kamu memiliki produk dengan variasi yang berbeda, maka
                  fitur produk terlaris ini dapat membantu kamu mengetahui
                  produk mana yang menjadi best seller dalam kurun waktu 1 bulan
                  atau 7 hari terakhir.
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-between mb-3">
            <div class="col-6 text-left subhead-feature-mobile">
              <div class="subhead-feature" style="padding-left: 20px">
                Tarik Data Otomatis dan Mudah
              </div>
            </div>
            <div class="col-6 text-right icon-newfeature">
              <img
                src="@/assets/img/background/mbl-dataoto.svg"
                alt="customer loyal"
              />
            </div>
            <div class="row justify-content-center mt-4">
              <div class="col-11">
                <div class="content-feature">
                  Data di dashboard akan semakin mudah kamu olah dengan
                  memanfaatkan menu download. Kamu tinggal pilih klasifikasi
                  data yang dibutuhkan.
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-between mb-3">
            <div class="col-6 text-left icon-newfeature">
              <img
                src="@/assets/img/background/mbl-kendala.svg"
                alt="top admin order"
              />
            </div>
            <div class="col-6 text-right subhead-feature-mobile">
              <div class="subhead-feature">Pantau Kendala Pengiriman</div>
            </div>
            <div class="row justify-content-center mt-4">
              <div class="col-11">
                <div class="content-feature">
                  Kendala pengiriman akan makin mudah dan cepat teratasi karena
                  terhubung langsung dengan ekspedisi terkait.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mbl-tambahan" style="display: none">
          <div class="row justify-content-between mb-3">
            <div class="col-6 text-left icon-newfeature">
              <img
                src="@/assets/img/partials/produk-terlaris.svg"
                alt="produk terlaris"
              />
            </div>
            <div class="col-6 text-right subhead-feature-mobile">
              <div class="subhead-feature">Produk Terlaris</div>
            </div>
            <div class="row justify-content-center">
              <div class="col-11">
                <div class="content-feature">
                  Jika kamu memiliki produk dengan variasi yang berbeda, maka
                  fitur produk terlaris ini dapat membantu kamu mengetahui
                  produk mana yang menjadi best seller dalam kurun waktu 1 bulan
                  atau 7 hari terakhir.
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-between mb-3">
            <div class="col-6 text-left subhead-feature-mobile">
              <div class="subhead-feature" style="padding-left: 20px">
                Customer Loyal
              </div>
            </div>
            <div class="col-6 text-right icon-newfeature">
              <img
                src="@/assets/img/partials/customer-loyal.svg"
                alt="customer loyal"
              />
            </div>
            <div class="row justify-content-center">
              <div class="col-11">
                <div class="content-feature">
                  Merupakan data Customer yang sering melakukan order kembali
                  (repeat order). Dengan mengetahui Customer Loyal kita, maka
                  proses orderan akan semakin cepat.
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-between mb-3">
            <div class="col-6 text-left icon-newfeature">
              <img
                src="@/assets/img/partials/top-admin.svg"
                alt="top admin order"
              />
            </div>
            <div class="col-6 text-right subhead-feature-mobile">
              <div class="subhead-feature">Top Admin Order</div>
            </div>
            <div class="row justify-content-center">
              <div class="col-11">
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
    <section class="conclusion justify-content-center">
      <div class="content py-5">
        <h3 data-aos="zoom-in-down" data-aos-duration="1500">
          Percayakan Pengiriman Orderanmu Pada Komship!
        </h3>
        <br />
        <button
          class="btn btn-primary btn-register-now"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          @click="openWindow('https://partner.komerce.id/komship-register')"
        >
          Daftar sekarang
        </button>
      </div>
    </section>
    <section id="conclusion-mobile" class="conclusion-mobile-right">
      <div class="conclusion-mobile-left">
        <div class="content-mobile">
          <h3
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            style="font-weight: 600; font-size:16px; important!"
          >
            Percayakan Pengiriman Orderanmu Pada Komship!
          </h3>
          <br />
          <button
            class="btn btn-register-now"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            style="font-weight: 500; font-size:16px; important!"
            @click="openWindow('https://partner.komerce.id/komship-register')"
          >
            Daftar sekarang
          </button>
        </div>
      </div>
    </section>
    <section class="testimoni" data-aos="fade-up" data-aos-duration="1500">
      <h3 class="title">
        <span style="color: #f95031">Komship</span> telah dipercaya oleh
        Pebisnis dan UMKM di Indonesia
      </h3>
      <div class="content-desktop">
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
                <img :src="require('@/assets/img/icons/arrow-right.svg')" />
              </template>
              <template #prev>
                <img :src="require('@/assets/img/icons/arrow-left.svg')" />
              </template>
            </Navigation>
          </template>
        </carousel>
      </div>
      <div class="content-mobile">
        <carousel :autoplay="3000" :wrap-around="true">
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
                <img :src="require('@/assets/img/icons/arrow-right.svg')" />
              </template>
              <template #prev>
                <img :src="require('@/assets/img/icons/arrow-left.svg')" />
              </template>
            </Navigation>
          </template>
        </carousel>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <div class="header">
          <h2 class="header-title">FAQ</h2>
        </div>
        <div class="accordion">
          <div v-for="item in items" :key="item.id" class="accordion-item">
            <h2 :id="'heading' + item.id" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + item.id"
                aria-expanded="true"
                :aria-controls="'collapse' + item.id"
              >
                <div class="item-header">
                  {{ item.header }}
                </div>
              </button>
            </h2>
            <div
              :id="'collapse' + item.id"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading' + item.id"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <!-- eslint-disable-next-line vue/require-v-for-key -->
                <div v-for="items in item.desc">
                  <div v-if="items?.subdesc">
                    <!-- eslint-disable-next-line vue/require-v-for-key -->
                    <ul v-for="val in items.data" style="margin-bottom: 1px">
                      <li
                        style="
                          list-style-type: disc !important;
                          margin-top: 1px !important;
                        "
                      >
                        {{ val }}
                      </li>
                    </ul>
                  </div>
                  <div v-else class="desc">
                    <span>{{ items === "" ? "&nbsp;" : items }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div
            v-for="item in items2"
            :key="item.id"
            class="accordion-item collapse"
            id="collapseExample"
          >
            <h2 :id="'heading' + item.id" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + item.id"
                aria-expanded="true"
                :aria-controls="'collapse' + item.id"
              >
                <div class="item-header">
                  {{ item.header }}
                </div>
              </button>
            </h2>
            <div
              :id="'collapse' + item.id"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading' + item.id"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <!-- eslint-disable-next-line vue/require-v-for-key -->
                <div v-for="items2 in item.desc">
                  <div v-if="items2?.subdesc">
                    <!-- eslint-disable-next-line vue/require-v-for-key -->
                    <ul v-for="val in items2.data" style="margin-bottom: 1px">
                      <li
                        style="
                          list-style-type: disc !important;
                          margin-top: 1px !important;
                        "
                      >
                        {{ val }}
                      </li>
                    </ul>
                  </div>
                  <div v-else class="desc">
                    <span>{{ items2 === "" ? "&nbsp;" : items2 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="FAQ-button">
            <button
              class="accordion-button"
              style="width: 190px; background-color: #f9f9f9"
              data-bs-toggle="collapse"
              href="#collapseExample"
              type="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Lihat FAQ lainnya
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script src="./Home.js"></script>
<style src="./Home.css"></style>
