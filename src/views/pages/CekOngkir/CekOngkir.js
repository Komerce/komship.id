/* eslint-disable prettier/prettier */
import axios from 'axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const apiUrl = 'https://komship.komerce.id/api/v2/landingpage/'
import { useMeta } from 'vue-meta'

export default {
  setup() {
    useMeta({
      title: 'Cek Ongkir JNE, SiCepat, ID Express 2022',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            'Cek ongkos kirim secara cepat & akurat dari berbagai ekspedisi (JNE, SiCepat, ID Express). Dapat diskon loh jika kirim pakai Komship.',
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Cek Ongkir JNE, Cek Ongkir SiCepat, Cek Ongkir ID Express',
        },
        {
          vmid: 'og-locale',
          property: 'og:locale',
          content: 'id',
        },
        {
          vmid: 'og-type',
          property: 'og:type',
          content: 'website',
        },
        {
          vmid: 'og-title',
          property: 'og:title',
          content: 'Cek Ongkir JNE, SiCepat, ID Express 2022',
        },
        {
          vmid: 'og-description',
          property: 'og:description',
          content:
            'Cek ongkos kirim secara cepat & akurat dari berbagai ekspedisi (JNE, SiCepat, ID Express). Dapat diskon loh jika kirim pakai Komship.',
        },
        {
          vmid: 'og-url',
          property: 'og:url',
          content: 'https://komship.id/cek-ongkir/',
        },
        {
          vmid: 'og-site_name',
          property: 'og:site_name',
          content: 'Komship',
        },
        {
          vmid: 'og-image',
          property: 'og:image',
          content: 'https://komship.id/img/komship.png',
        },
        {
          vmid: 'og-image-width',
          property: 'og:image:width',
          content: '1280',
        },
        {
          vmid: 'og-image-height',
          property: 'og:image:height',
          content: '720',
        },
        {
          vmid: 'og-see_also',
          property: 'og:see_also',
          content: 'https://www.instagram.com/komship/',
        },
        {
          vmid: 'og-see_also2',
          property: 'og:see_also',
          content: 'https://www.facebook.com/komship/',
        },
      ],
      link: [
        {
          vmid: 'canonical',
          rel: 'canonical',
          href: 'https://komship.id/cek-ongkir/',
        },
      ],
      script: [
        {
          vmid: 'ldjson-schema',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Komship',
            legalName: 'Komship',
            logo: 'https://komship.id/img/komship.png',
            url: 'https://komship.id/',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Jl. Raya Tamansari, Kompleks Karangwuni, Desa Tamansari, Karangmoncol',
              addressLocality: 'Purbalingga',
              postalCode: '53355',
              addressCountry: 'ID',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer service',
              email: 'mailto:support@komship.id',
              telephone: '081227931840',
            },
            sameAs: [
              'https://www.facebook.com/komship/',
              'https://www.instagram.com/komship/',
            ],
          },
        },
      ],
      style: [],
    })
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
    }
  },
  mounted() {
    this.getDestination()
  },
  methods: {
    formatNumber: value =>
      `${value}`.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
    getDestination(search) {
      axios
        .get(apiUrl + 'destination', {
          params: { search },
        })
        .then(res => {
          const { data } = res.data
          this.destination = data.data
        })
    },
    calculate() {
      if (this.addressFrom && this.addressTo && this.weight) {
        this.loadingCekOngkir = true
        axios
          .get(apiUrl + 'calculate', {
            params: {
              shipper_destination: this.addressFrom.id,
              receiver_destination: this.addressTo.id,
              weight: this.weight,
            },
          })
          .then(res => {
            this.loadingCekOngkir = false
            const { data } = res.data
            this.itemsCekOngkir = data
            this.isCekOngkir = true
          })
          .catch(err => {
            console.log(err)
            this.loadingCekOngkir = false
          })
      } else {
        this.loadingCekOngkir = false
        this.itemsCekOngkir = null
        this.isCekOngkir = false
      }
    },
    labelShippingType(value) {
      if (value === 'STD') {
        return 'STANDARD'
      } else if (value === 'REG19') {
        return 'REGULER'
      } else if (value === 'OKE19') {
        return 'OKE'
      } else if (value === 'CTC19') {
        return 'REGULER'
      } else if (value === 'YES19') {
        return 'YES'
      } else if (value === 'SIUNT') {
        return 'SIUNTUNG'
      } else if (value === 'GOKIL') {
        return 'GOKIL (CARGO)'
      }
      return value
    },
  },
}
