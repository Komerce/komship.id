import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Navigation,
    Slide,
  },
  data() {
    return {
      benefitContent: "JNE",
      service_items: [
        {
          id: 1,
          title: "Terima Pembayaran COD Instan",
          image: require("@/assets/img/icons/bgwallet.png"),
          description:
            "Semua bisa COD di Komship. Otomatis dan tanpa ribet urus persyaratan kerjasama satu persatu ke ekspedisi.",
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
            "Dapatkan diskon ongkos kirim MULAI dari 25% (Berlaku COD dan Non COD) lebih hemat dibandingkan yang lain.",
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
            "Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD.",
        },
        {
          id: 6,
          title: "Gratis Jemput Paket",
          image: require("@/assets/img/icons/kendaraan.png"),
          description:
            "Cukup tunggu saja di rumah, kurir akan mendatangi lokasimu untuk mengambil paket TANPA MINIMUM ORDER.",
        },
      ],
      flow_items: [
        {
          id: 1,
          title: "Order masuk dari pelanggan",
          image: require("@/assets/img/icons/alur-icon1.svg"),
        },
        {
          id: 2,
          title: "Seller menyiapkan orderan",
          image: require("@/assets/img/icons/alur-icon2.svg"),
        },
        {
          id: 3,
          title: "Seller memasukan data di dashboard Komship",
          image: require("@/assets/img/icons/alur-icon3.svg"),
        },
        {
          id: 4,
          title: "Ekspedisi menjemput barang ke lokasi seller",
          image: require("@/assets/img/icons/alur-icon4.svg"),
        },
        {
          id: 5,
          title: "Barang diterima pelanggan",
          image: require("@/assets/img/icons/alur-icon5.svg"),
        },
        {
          id: 6,
          title: "Non COD (selesai) / COD (uang diterima)",
          image: require("@/assets/img/icons/alur-icon6.svg"),
        },
        {
          id: 7,
          title: "Dana dicairkan",
          image: require("@/assets/img/icons/alur-icon7.svg"),
        },
      ],
      feature_items: [
        {
          id: 1,
          title: "Produk Terlaris",
          description:
            "Jika kamu memiliki produk dengan variasi yang berbeda, maka fitur produk terlaris ini dapat membantu kamu mengetahui produk mana yang menjadi best seller dalam kurun waktu 1 bulan atau 7 hari terakhir.",
          image: require("@/assets/img/partials/produk-terlaris.svg"),
        },
        {
          id: 2,
          title: "Customer Loyal",
          description:
            "Merupakan data Customer yang sering melakukan order kembali (repeat order). Dengan mengetahui Customer Loyal kita, maka proses orderan akan semakin cepat.",
          image: require("@/assets/img/partials/customer-loyal.svg"),
        },
        {
          id: 3,
          title: "Produk Terlaris",
          description:
            "Fitur yang akan mempermudah para pebisnis memantau produktifitas para admin dengan melihat data akumulasi performa masing-masing admin yang ada. Makin mudah juga untuk mengambil keputusan seperti pemberian bonus dan meningkatkan semangat kerja para admin.",
          image: require("@/assets/img/partials/top-admin.svg"),
        },
      ],
      testimoni_items: [
        {
          id: 1,
          image: require("@/assets/img/avatars/testimoni-1.svg"),
          name: "Mansur",
          description:
            "Komship bagus banget konsepnya, menciptakan kemudahan penjual untuk mengirim barang, apalagi ada fitur COD tanpa harus daftar ribet ke jasa kirim, UI nya juga mudah dipahami untuk pemula",
        },
        {
          id: 2,
          image: require("@/assets/img/avatars/testimoni-2.svg"),
          name: "Nursiswanto",
          description:
            "Komship Mantap👍👍👍 Cashbacknya besar, kalau bisa ditingkatkan lagi. Pencairan setiap hari bikin cash flow aman",
        },
        {
          id: 3,
          image: require("@/assets/img/avatars/testimoni-3.svg"),
          name: "Diki Moh. Ghani ",
          description:
            "Komship lebih easy user, fitur-fiturnya juga bagus, kita bisa tahu secara otomatis CS yang jualannya paling kenceng dan yang paling kurang kenceng.Selain itu juga ada fitur keuangannya jadi sangat membantu banget. Dan jika ada kendala Tim Supportnya fast respon",
        },
        {
          id: 4,
          image: require("@/assets/img/avatars/testimoni-4.svg"),
          name: "Diki Arliansyah",
          description:
            "Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁",
        },
        {
          id: 5,
          image: require("@/assets/img/avatars/testimoni-5.svg"),
          name: "Eko Sulistiyono ",
          description:
            "Alhamdulilah lancar , fiturnya mudah di pahami juga. Apalagi, Kalau ada kendala team Komship siap membantu dan fast respon. Pemakaiannya juga simple, beda sama Aplikasi serupa yang lain.",
        },
        {
          id: 6,
          image: require("@/assets/img/avatars/testimoni-6.svg"),
          name: "Agus David Saputra",
          description:
            "Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.",
        },
      ],
    };
  },
  methods: {
    openWindow(url) {
      window.open(url);
    },
    benefitTabs(value) {
      this.benefitContent = value;
    },
  },
};
