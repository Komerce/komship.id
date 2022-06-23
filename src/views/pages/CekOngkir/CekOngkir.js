import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const apiUrl = "https://komship.komerce.id/api/v2/landingpage/";
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "Cek Ongkir JNE, SiCepat, ID Express 2022",
      meta: [
        {
          name: "description",
          vmid: "description",
          content:
            "Cek ongkos kirim secara cepat & akurat dari berbagai ekspedisi (JNE, SiCepat, ID Express). Dapat diskon loh jika kirim pakai Komship.",
        },
        {
          name: "keywords",
          vmid: "keywords",
          content: "Cek Ongkir JNE, Cek Ongkir SiCepat, Cek Ongkir ID Express",
        },
        {
          property: "og:locale",
          vmid: "og:locale",
          content: "id",
        },
        {
          property: "og:type",
          vmid: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          vmid: "og:title",
          content: "Cek Ongkir JNE, SiCepat, ID Express 2022",
        },
        {
          property: "og:description",
          vmid: "og:description",
          content:
            "Cek ongkos kirim secara cepat & akurat dari berbagai ekspedisi (JNE, SiCepat, ID Express). Dapat diskon loh jika kirim pakai Komship.",
        },
        {
          property: "og:url",
          vmid: "og:url",
          content: "https://komship.id/cek-ongkir/",
        },
        {
          property: "og:site_name",
          vmid: "og:site_name",
          content: "Komship",
        },
        {
          property: "og:image",
          vmid: "og:image",
          content: "https://komship.id/img/komship.png",
        },
        {
          property: "og:image:width",
          vmid: "og:image:width",
          content: "1280",
        },
        {
          property: "og:image:height",
          vmid: "og:image:height",
          content: "720",
        },
        {
          property: "og:see_also",
          propvmiderty: "og:see_also",
          content: "https://www.instagram.com/komship/",
        },
        {
          property: "og:see_also",
          vmid: "og:see_also2",
          content: "https://www.facebook.com/komship/",
        },
      ],
      link: [
        {
          rel: "canonical",
          vmid: "canonical",
          href: "https://komship.id/cek-ongkir/",
        },
      ],
      script: [
        {
          vmid: "application-ldjson",
          type: "application/ld+json",
          innerHtml: `{ "@context": "https://schema.org", "@type": "Organization", name: "Komship", legalName: "Komship", logo: "https://komship.id/img/komship.png", url: "https://komship.id/", address: { "@type": "PostalAddress", streetAddress: "Jl. Raya Tamansari, Kompleks Karangwuni, Desa Tamansari, Karangmoncol", addressLocality: "Purbalingga", postalCode: "53355", addressCountry: "ID", }, contactPoint: { "@type": "ContactPoint", contactType: "Customer service", email: "mailto:support@komship.id", telephone: "081227931840", }, sameAs: [ "https://www.facebook.com/komship/", "https://www.instagram.com/komship/", ],
          }`,
        },
      ],
      style: [],
    });
  },

  components: { vSelect },
  data() {
    return {
      destination: [],
      addressFrom: null,
      addressTo: null,
      weight: null,
      isCekOngkir: false,
      loadingCekOngkir: false,
      itemsCekOngkir: null,
    };
  },
  mounted() {
    this.getDestination();
  },
  methods: {
    formatNumber: (value) =>
      `${value}`.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    getDestination(search) {
      axios
        .get(apiUrl + "destination", {
          params: { search },
        })
        .then((res) => {
          const { data } = res.data;
          this.destination = data.data;
        });
    },
    calculate() {
      if (this.addressFrom && this.addressTo && this.weight) {
        this.loadingCekOngkir = true;
        axios
          .get(apiUrl + "calculate", {
            params: {
              shipper_destination: this.addressFrom.id,
              receiver_destination: this.addressTo.id,
              weight: this.weight,
            },
          })
          .then((res) => {
            this.loadingCekOngkir = false;
            const { data } = res.data;
            this.itemsCekOngkir = data;
            this.isCekOngkir = true;
          })
          .catch((err) => {
            console.log(err);
            this.loadingCekOngkir = false;
          });
      } else {
        this.loadingCekOngkir = false;
        this.itemsCekOngkir = null;
        this.isCekOngkir = false;
      }
    },
    labelShippingType(value) {
      if (value === "STD") {
        return "STANDARD";
      } else if (value === "REG19") {
        return "REGULER";
      } else if (value === "OKE19") {
        return "OKE";
      } else if (value === "CTC19") {
        return "REGULER";
      } else if (value === "YES19") {
        return "YES";
      } else if (value === "SIUNT") {
        return "SIUNTUNG";
      } else if (value === "GOKIL") {
        return "GOKIL (CARGO)";
      }
      return value;
    },
  },
};
