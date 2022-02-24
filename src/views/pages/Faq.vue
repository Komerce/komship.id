<template>
  <div>
    <section class="faq">
      <div class="container">
        <div class="header">
          <h2 class="header-title">Frequently Asked Questions</h2>
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
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { useMeta } from "vue-meta";
export default {
  setup() {
    useMeta({
      title: "FAQ",
    });
  },
  data() {
    return {
      items: [
        {
          id: "1",
          header: "Apa itu Komship?",
          desc: "Komship merupakan platform layanan pengiriman untuk membantu kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum pengiriman.",
        },
        {
          id: "2",
          header: "Apakah ada biaya bulanan?",
          desc: "Tidak, kamu bisa menggunakan Komship tanpa harus membayar biaya bulanan.",
        },
        {
          id: "3",
          header: "Apakah ada tutorial penggunaan Komship?",
          desc: "Ya, kami menyediakan tutorial yang lengkap baik berupa text, gambar maupun video, disamping itu kamu tetap dapat menghubungi kami jika ada kebingungan dalam penggunaan.",
        },
        {
          id: "4",
          header: "Saya masih newbie apakah boleh menggunakan Komship?",
          desc: "Tidak masalah, kamu bebas menggunakan layanan Komship. Di Komship, kami tidak memberikan minimal pcs untuk dapat menggunakan layanan pick-up.",
        },
        {
          id: "5",
          header:
            "Apakah Komship akan menonaktifkan akun saya jika dalam beberapa bulan tidak dipakai?",
          desc: "Iya, ketika akun kamu tidak memiliki transaksi dalam waktu 30 hari maka akun kamu akan dibekukan.",
        },
        {
          id: "6",
          header:
            "Apakah Komship bisa digunakan untuk saya yang jualan offline?",
          desc: "Tentu saja, fitur Komship dapat kamu manfaatkan untuk membantu penjualanmu. Kamu bisa melakukan menginput produk, menginput orderan, hingga melakukan pengiriman.",
        },
        {
          id: "7",
          header: "Bisnis apa yang cocok jika menggunakan Komship?",
          desc: "Jika bisnis kamu adalah reseller, dropship dan supplier, maka kamu dapat menggunakan Komship.",
        },
        {
          id: "8",
          header: "Apakah ada batas input produk di Komship?",
          desc: "Komship tidak memiliki batas input produk. Kamu bebas untuk melakukan input.",
        },
        {
          id: "9",
          header: "Apakah bisa untuk mengirim dengan volume yang besar?",
          desc: "Komship memberikan opsi pengiriman menggunakan motor, mobil maupun truk, sesuai dengan kapasitas dari ekspedisi.",
        },
        {
          id: "10",
          header: "Apakah saya bisa menarik dana COD kapan saja?",
          desc: "Tentu, kamu dapat menarik dana kapanpun ketika transaksi telah selesai.",
        },
      ],
    };
  },
};
</script>
<style>
.faq {
  background-color: #f8f9fa;
  padding: 10vw 0;
  height: 100%;
}
.faq .header {
  display: flex;
  justify-content: center;
  padding-bottom: 3vw;
}
.faq .header-title {
  font-size: 32px;
  font-weight: 700;
}
.faq .accordion-item {
  border-radius: 8px !important;
  border: 1px solid #e2e2e2 !important;
  margin-bottom: 10px;
}
.faq .accordion-button {
  border-radius: 8px !important;
  color: #f95031 !important;
}
.faq .item-header {
  width: 90%;
}
.faq .accordion-button::after {
  background-image: url("../../assets/img/icons/plus-icon.png");
}
.faq .accordion-button:not(.collapsed)::after {
  background-image: url("../../assets/img/icons/minus-icon.png");
}
.faq .accordion-button:focus {
  border-color: unset !important;
  box-shadow: unset !important;
}
.faq .accordion-button:not(.collapsed) {
  background-color: unset !important;
  border-color: unset !important;
  color: #f95031 !important;
  box-shadow: unset !important;
}
.faq .accordion-body {
  padding-top: 0 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  margin-right: 18%;
}
@media only screen and (max-width: 480px) {
  .faq .header-title {
    font-size: 20px;
  }
}
</style>
