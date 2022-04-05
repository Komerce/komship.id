<template>
  <div style="background-color: #f6f6f9; padding-bottom: 50px">
    <section id="home" style="background-color: #ffffff">
      <div class="register-now container">
        <div class="row">
          <div class="col-md-6 content">
            <h3 class="title">
              Juaranya Platform Kirim Barang, Mudah dan Murah dengan
              <span style="color: #f95031">Komship</span>
            </h3>
            <p class="description">
              Dapatkan diskon ongkir mulai dari 25% dan GRATIS biaya retur!
              Pelajari lebih lanjut untuk dapat tawaran menarik
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
          <div class="col-md-6 image-desktop">
            <img :src="require('@/assets/img/hero/new-bg-hero.svg')" />
          </div>
        </div>
      </div>
    </section>
    <section id="service" class="service">
      <div class="container">
        <div class="row mb-1">
          <div class="col-lg-5 col-md-6">
            <h3 class="title">Sering kirim barang?</h3>
          </div>
          <div class="col-lg-7 col-md-6 description">
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
          <carousel :autoplay="2000" :wrap-around="true">
            <slide v-for="item in service_items" :key="item.id">
              <div class="card">
                <div class="card-body">
                  <img :src="item.image" class="icons" />
                  <h3 class="title">{{ item.title }}</h3>
                  <p class="description">{{ item.description }}</p>
                </div>
              </div>
            </slide>
          </carousel>
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
      <div class="benefit-table-desktop">
        <div class="row">
          <div class="col-md-3 p-4 head">Benefit</div>
          <div class="col-md-3 p-4 subhead">JNE</div>
          <div class="col-md-3 p-4 subhead">SiCepat</div>
          <div class="col-md-3 p-4 subhead">IDExpress</div>
        </div>
        <div class="row">
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
        <div class="row">
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
        <div class="row">
          <div class="col-6 p-3 head">Diskon Biaya Retur</div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3">
            <li class="list-benefit">Gratis se-Jawa Bali</li>
            <li class="list-benefit">Non Jawa Bali 50%</li>
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3">
            Gratis se-lndonesia
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            <li class="list-benefit">Gratis se-Jawa Bali</li>
            <li class="list-benefit">Non Jawa Bali 50%</li>
          </div>
        </div>
      </div>
      <span style="font-weight: 500">*S&K berlaku</span>
    </section>
    <section class="recommend mt-5">
      <div class="container">
        <h3 class="d-block text-center mb-4">Rekomendasi untuk Kamu</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/jne-counter.png" />
              </div>
              <span class="content">
                Makin tenang kirim orderan dengan gerai terbanyak dan cakupan
                terluas di Indonesia
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/sicepat-counter.png" />
              </div>
              <span class="content">
                Makin untung dan hemat kirim orderan bahkan ke pelosok
                Indonesia. Kirim pakai Cargo gak kalah hematnya!
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/idexpress-counter.png" />
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
              <img :src="require('@/assets/img/icons/arrow-right.svg')" />
            </template>
            <template #prev>
              <img :src="require('@/assets/img/icons/arrow-left.svg')" />
            </template>
          </Navigation>
        </template>
      </carousel>
    </section>
  </div>
</template>
<script src="./Home.js"></script>
<style src="./Home.css"></style>
