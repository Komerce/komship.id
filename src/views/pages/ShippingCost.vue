<template>
  <section id="ShippingCost">
    <div class="container p-5">
      <img src="@/assets/img/hero/cek-ongkir.png" />
      <h1 class="title-banner">Cek Ongkos Kirim</h1>
      <div id="form" class="card">
        <div class="card-body">
          <div class="row mt-4">
            <div class="col-md-3 mb-1">
              <v-select
                v-model="addressFrom"
                :options="destination"
                placeholder="Alamat Asal"
                @search="getDestination"
              />
            </div>
            <div class="col-md-3 mb-1">
              <v-select
                v-model="addressTo"
                :options="destination"
                placeholder="Alamat Tujuan"
                @search="getDestination"
              />
            </div>
            <div class="col-md-3 mb-1">
              <input
                v-model="weight"
                type="number"
                class="form-control"
                placeholder="Berat"
              />
            </div>
            <div class="col-md-2 mb-1">
              <button
                class="btn btn-primary"
                style="width: 100%"
                @click="calculate"
              >
                Cek Ongkir
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="result" class="card" v-if="isCalculate">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th
                  v-for="(column, index) in columns"
                  :key="index"
                  class="text-center"
                >
                  {{ column }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="index"
                class="text-center align-middle"
              >
                <td>
                  <img
                    :src="item.image_path"
                    style="max-width: 130px; max-height: 60px"
                  />
                </td>
                <td style="text-align: left !important">
                  {{ shippingTypeLabel(item.shipping_type) }}
                  <div
                    v-if="item.is_komship_shipment === 1"
                    class="alert alert-success komship-info"
                    role="alert"
                  >
                    Kirim pakai Komship, dapet diskon ongkir
                  </div>
                </td>
                <td>{{ item.estimasi }}</td>
                <td>
                  Rp {{ formatNumber(item.shipping_cost) }}
                  <div class="alert alert-success shipping-cost">
                    Rp {{ formatNumber(item.shipping_cost_komship) }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  components: { vSelect },
  data: function () {
    return {
      destination: [],
      addressFrom: [],
      addressTo: [],
      weight: null,
      isCalculate: false,
      items: [],
      columns: ["Ekspedisi", "Jenis Pengiriman", "Estimasi", "Biaya"],
    };
  },
  methods: {
    formatNumber: (value) =>
      `${value}`.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    getDestination(search) {
      axios
        .get("https://komshipdev.komerce.id/api/v2/landingpage/destination", {
          params: { search },
        })
        .then((res) => {
          const { data } = res.data;
          this.destination = data.data;
        });
    },
    calculate() {
      if (
        this.addressFrom !== [] &&
        this.addressTo !== [] &&
        this.weight !== null
      ) {
        this.loadingCalculate = true;
        axios
          .get("https://komshipdev.komerce.id/api/v2/landingpage/calculate", {
            params: {
              origin_code: this.addressFrom.value,
              tariff_code: this.addressTo.value,
              weight: this.weight,
            },
          })
          .then((res) => {
            const { data } = res.data;
            this.items = data;
            this.isCalculate = true;
          });
      }
    },
    shippingTypeLabel(value) {
      if (value === "STD") {
        return "STANDARD";
      }
      return value;
    },
  },
};
</script>
<style scoped>
#ShippingCost {
  background-color: #f9f9f9;
  min-height: 100vh;
}
.title-banner {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -240px;
  color: #ffffff;
}
#form {
  border: none;
  min-height: 130px;
  border-radius: 16px;
  position: relative;
  margin-top: 60px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
}
.form-control:focus {
  box-shadow: unset;
}
#result {
  margin-top: 20px;
  border-radius: 8px;
}
.btn {
  box-shadow: unset;
}
.text-primary {
  color: #f95031 !important;
}
.komship-info {
  font-size: 14px;
  padding: 4px 0;
  width: 295px;
  text-align: center;
}
.shipping-cost {
  font-size: 14px;
  font-weight: 600;
  padding: 4px 0;
  width: 100px;
  text-align: center;
  margin: auto;
}
</style>
