<template>
  <teleport to="head">
    <component :is="script" type="application/ld+json">
      {"@context":"https://schema.org","@type":"BreadcrumbList","@id":"https://komship.id/cek-ongkir/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://komship.id","name":"Beranda"}},{"@type":"ListItem","position":2,"item":{"@id":"https://komship.id/cek-ongkir/","name":"Cek
      Ongkir JNE, SiCepat, dan ID Express 2022"}}]}
    </component>
  </teleport>
  <section class="container mt-4 mb-4">
    <div class="banner">
      <span class="title">Cek Ongkos Kirim</span>
      <img class="image" src="@/assets/img/hero/cek-ongkir.png" />
    </div>
    <div class="card form">
      <div class="row">
        <div class="col-lg-3 mb-2">
          <v-select
            v-model="addressFrom"
            :options="destination"
            placeholder="Alamat Asal"
            class="form-address"
            @search="getDestination"
          >
            <template v-slot:no-options class="none">{{ "" }}</template>
          </v-select>
        </div>
        <div class="col-lg-3 mb-2">
          <v-select
            v-model="addressTo"
            :options="destination"
            placeholder="Alamat Tujuan"
            class="form-address"
            @search="getDestination"
          >
            <template v-slot:no-options class="none">{{ "" }}</template>
          </v-select>
        </div>
        <div class="col-lg-3 mb-2">
          <div class="input-group">
            <input
              v-model="weight"
              type="number"
              class="form-control form-weight"
              placeholder="Berat"
            />
            <div class="input-group-append">
              <span class="input-group-text label-weight">Kg</span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 mb-2 d-flex justify-content-end">
          <button class="btn btn-primary btn-cek-ongkir" @click="calculate()">
            <div
              v-if="loadingCekOngkir"
              class="spinner-border spinner-border-sm text-light"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            Cek Ongkir
          </button>
        </div>
      </div>
    </div>
    <div class="card mt-3 table-responsive result">
      <table v-if="isCekOngkir" class="table table-hovered">
        <thead>
          <tr class="text-center">
            <th>Ekspedisi</th>
            <th>Jenis Pengiriman</th>
            <th>Estimasi</th>
            <th>Biaya</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in itemsCekOngkir"
            :key="index"
            class="text-center align-middle"
          >
            <td>
              <img :src="item.image_path" class="items-image" />
            </td>
            <td class="items-shipping-type">
              {{ labelShippingType(item.shipping_type) }}
              <div
                v-if="item.is_komship_shipment === 1"
                class="alert alert-success items-info"
              >
                Kirim pakai Komship, dapet diskon ongkir
              </div>
            </td>
            <td>
              <span v-if="item.estimasi === '-'">-</span>
              <span v-else>{{ item.estimasi }}</span>
            </td>
            <td>
              Rp {{ formatNumber(item.shipping_cost) }}
              <div
                v-if="item.is_komship_shipment === 1"
                class="alert alert-success items-info-price"
              >
                Rp {{ formatNumber(item.shipping_cost_komship) }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <span v-else class="result-false"
        >Cek ongkir kamu akan muncul disini</span
      > -->
      <div v-else class="row justify-content-center text-center">
        <div>
          <img
            src="../../../assets/img/illustration/ilustration-before-cek.svg"
            width="595"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./CekOngkir.js" />
<style lang="css" src="./CekOngkir.css" />
