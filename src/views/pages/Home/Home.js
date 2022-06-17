/* eslint-disable prettier/prettier */
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { useHead } from '@vueuse/head'

export default {
  setup() {
    useHead({
      title: {
        inner: "Komship - Platform Kirim Barang",
      },
      meta: [
        {
          name: "description",
          content: "Komship merupakan platform layanan pengiriman yang bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode COD atau Non-COD tanpa batas minimum pengiriman."
        },
        {
          name: "keywords",
          content: "komship"
        },
        {
          property: "og:locale",
          content: "id"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:title",
          content: "Komship - Platform Kirim Barang"
        },
        {
          property: "og:description",
          content: "Komship merupakan platform layanan pengiriman yang bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode COD atau Non-COD tanpa batas minimum pengiriman."
        },
        {
          property: "og:url",
          content: "https://komship.id/"
        },
        {
          property: "og:site_name",
          content: "Komship"
        },
        {
          property: "og:image",
          content: "https://komship.id/img/komship.png"
        },
        {
          property: "og:image:width",
          content: "1280"
        },
        {
          property: "og:image:height",
          content: "720"
        },
        {
          property: "og:see_also",
          content: "https://www.instagram.com/komship/"
        },
        {
          property: "og:see_also",
          content: "https://www.facebook.com/komship/"
        }
        
      ],
      link: [
        {
          rel: "canonical",
          href:"https://komship.id/"
        }
      ],
      script:[
        { t: 'application/ld+json', i: '{"@context":"https://schema.org/", "@type":"WebSite", "name":"Komship", "description":"Komship merupakan platform layanan pengiriman yang bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode COD atau Non-COD tanpa batas minimum pengiriman.","url":"https://komship.id/", "image":{"@type":"ImageObject", "url":"https://komship.id/img/komship.png", "height":"720", "width":"1280"},"sameAs":["https://www.facebook.com/komship/", "https://www.instagram.com/komship/"], "potentialAction":{"@type":"SearchAction", "target":"https://komship.id/pencarian?q={search_term_string}", "query-input":"required name=search_term_string"}}'},
      ],
      style:[]
    })
  },
  components: {
    Carousel,
    Navigation,
    Slide,
  },
  
  data() {
    return {
      totalPartners: null,
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
            "Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD seluruh Indonesia.",
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
          title: "Top Admin Order",
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
      items: [
        {
          id: "1",
          header: "Apa itu Komship ?",
          desc: [
            "Komship merupakan platform layanan pengiriman untuk membantu kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum pengiriman.",
          ],
        },
        {
          id: "2",
          header: "Bagaimana cara daftar Komship?",
          desc: [
            "1. Daftar di website Komship.com",
            "2. Klik tomblo Mulai Sekarang.",
            "3. Atau bisa langsung buka https://partner.komerce.id/komship-register.",
            "4. Isi form pendaftaran (Isi data yang diminta), Isi form pendaftaran (Isi data yang diminta), lalu centang kotak syarat dan ketentuan dibawahnya.",
            "5. Klik Daftar.",
            "6. Lakukan verifikasi dengan membuka email yang kamu pakai untuk registrasi",
            "7. Akun Komship siap dipakai.",
            "8. Selanjutnya, kamu tinggal melengkapi profil akun Komship kamu dengan data-data yang valid.",
          ],
        },
        {
          id: "3",
          header:
            "Apakah ada biaya retur di Komship? Jika ada, berapa biayanya?",
          desc: [
            "Biaya retur (Pengembelian COD) gratis se-Indonesia. Biaya yang di gratiskan mencakup ongkir pengembalian paket, pelanggan cukup membayar ongkir pengiriman di awal saja.",
          ],
        },
        {
          id: "4",
          header: "Apakah ada diskon ongkir di Komship?",
          desc: [
            "Tentu saja ada, berikut diskon ongkir yang bisa kamu dapatkan dengan menggunakan Komship",
            {
              subdesc: "afasfdasfasf",
              data: [
                "JNE Reg 25%.",
                "Si Cepat Reg 30%, Cargo mulai dari 2.500/kg + diskon 5% ( min. 10kg )",
                "ID Express Reg 25% ( >½ kg ), < ½ kg bayar ½-nya + diskon 15%",
              ],
            },
            "",
            "Contoh simulasi:",
            "Ongkir untuk ekspedisi JNE Reg yang dibayarkan oleh customer sebesar 20.000, 25% dari 20.000 adalah 5.000. Maka, kamu dapat diskon ongkir sebesar 5.000 rupiah.",
          ],
        },
        {
          id: "5",
          header: "Apakah ada biaya administrasi bulanan ?",
          desc: [
            "Tidak, kamu bisa menggunakan Komship tanpa harus membayar biaya administrasi bulanan.",
          ],
        },
      ],
      items2: [
        {
          id: "6",
          header:
            "Apakah Komship akan me-nonaktifkan akun jika beberapa bulan tidak terpakai?",
          desc: [
            "Betul. Akun akan dinonaktifkan jika dalam waktu 30 hari tidak aktif.",
          ],
        },
        {
          id: "7",
          header: "Apakah Komship bisa di gunakan bagi yang berjualan offline?",
          desc: [
            "Sangat Bisa. Selagi masih dalam ruang lingkup pengiriman paket orderan.",
          ],
        },
        {
          id: "8",
          header: "Bisnis model apa sajakah yang cocok menggunakan Komship?",
          desc: [
            "Komship sangat cocok untuk kamu yang memiliki model bisnis seperti distributor, dropshipper, reseller, atau produsen.",
          ],
        },
        {
          id: "9",
          header:
            "Jika sudah bekerja sama dengan ekspedisi apakah bisa menggunakan Komship?",
          desc: [
            "Sangat Bisa. Yang terpenting kamu tidak mengirimkan paket yang sama antara dengan Komship dan Ekspedisi.",
          ],
        },
        {
          id: "10",
          header: "Berapa biaya penanganan COD di Komship?",
          desc: [
            "",
            {
              subdesc: "afasfdasfasf",
              data: [
                "Biaya penanganan COD di Komship sebesar 2.8% dari total harga+ongkir.",
              ],
            },
            "",
            "Contoh Simulasi:",
            "Total harga+ongkir yang dibayarkan oleh customer sebesar 250.000 rupiah, 2.8% dari 250.000 adalah 7.000 rupiah. Maka, biaya penanganan COD yang harus dibayarkan oleh customer sebesar 7.000 rupiah.",
          ],
        },
        {
          id: "11",
          header:
            "Dana COD akan cair maksimal berapa hari setelah barang diterima pembeli?",
          desc: ["Dana COD dapat langsung dicairkan setelah pesanan selesai."],
        },
      ],
    };
  },
  mounted() {
    this.countPartners();
  },
  methods: {
    getAsyncData: function () {
      var self = this
      window.setTimeout(function () {
        self.title = 'My async title'
        self.$emit('updateHead')
      }, 3000)
    },
    openWindow(url) {
      window.open(url);
    },
    benefitTabs(value) {
      this.benefitContent = value;
    },
    countPartners() {
      this.$http.get("countPartners").then((res) => {
        const { data } = res.data;
        this.totalPartners = data;
      });
    },
    replace( hide, show ) {
      document.getElementById(hide).style.display="none";
      document.getElementById(show).style.display="block";
    },
    replace2( hide, hide2, show ) {
      document.getElementById(hide).style.display="none";
      document.getElementById(hide2).style.display="none";
      document.getElementById(show).style.display="block";
    },
  },
};
