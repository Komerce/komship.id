import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
window.addEventListener("scroll", () => {
  console.log(window.history)
  if (window.history.state.current === '/' || window.history.state.current === '/#home' || window.history.state.current === '/#service' || window.history.state.current === '/#alur' || window.history.state.current === '/#feature') {
    if (window.pageYOffset < 540) {
      document.getElementById('navmenuhome').classList.add('active')
    } else {
      document.getElementById('navmenuhome').classList.remove('active')
    }
    if (window.pageYOffset > 540 && window.pageYOffset < 1780) {
      document.getElementById('navmenuservice').classList.add('active')
    } else {
      document.getElementById('navmenuservice').classList.remove('active')
    }
    if (window.pageYOffset > 1780 && window.pageYOffset < 2850) {
      document.getElementById('navmenualur').classList.add('active')
    } else {
      document.getElementById('navmenualur').classList.remove('active')
    }
    if (window.pageYOffset > 2850) {
      document.getElementById('navmenufitur').classList.add('active')
    } else {
      document.getElementById('navmenufitur').classList.remove('active')
    }
  }
});
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
        snapAlign: "center",
      },
      breakpoints: {
        600: {
          itemsToShow: 2.95,
          snapAlign: "center",
        },
      },
      settingscarouselservice: {
        itemsToShow: 1.5,
      },
      breakpointsservice: {
        1024: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
      },
      testimoniesData: [
        {
          name: "Eko Sulistiyono",
          image: require("@/assets/img/person/testimoni-eko-s.png"),
          description:
            "Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.",
        },
        {
          name: "Agus David Saputra",
          image: require("@/assets/img/person/testimoni-agus.png"),
          description:
            "Alhamdulilah lancar mba, fiturnya mudah di pahami juga. Apalagi, Kalau ada kendala team Komship siap membantu dan fast respon. Pemakaiannya juga simple, beda sama Aplikasi serupa yang lain.",
        },
        {
          name: "Diki Arliansyah",
          image: require("@/assets/img/person/testimoni-diki.png"),
          description:
            "Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁🙏",
        },
        {
          name: "Ananda Bagas",
          image: require("@/assets/img/person/testimoni-ananda.png"),
          description:
            "Absolutely perfect ! Sangat terbantu dengan fiturnya yang lengkap & praktis untuk memproses orderan. cashback ongkir 25% yang lumayan gurih, ditambah pencairan dana setiap hari yang dapat memperlancar cash flow.",
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
          title: "Pencairan Setiap Hari",
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
            "Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD",
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
          text: "Order masuk dari customer",
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 2,
          text: "Seller menyiapkan orderan",
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 3,
          text: "Seller menginput data di Komship",
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 4,
          text: "Ekspedisi menjemput barang ke lokasi seller",
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 5,
          text: "Barang diterima customer",
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 6,
          text: "Non COD (selesai) / COD (uang diterima)",
          gambar: require("@/assets/img/icons/arrow.png"),
        },
        {
          id: 7,
          text: "Dana dicairkan",
          gambar: require("@/assets/img/icons/arrow.png"),
        },
      ],
      service_item: [
        {
          id: 1,
          title1: "Produk Terlaris",
          image: require("@/assets/img/background/produk_terlaris.png"),
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
  methods: {
    openWindow(url = "") {
      if (url) {
        window.open(this.defaultRedirectURL);
      }
      return;
    },
  },
};
