import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const apiUrl = "https://komshipdev2.komerce.id/api/v2/landingpage/";

export default {
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
