<template>
  <div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6 content">
            <h2 class="title">Tentang Kami</h2>
            <div class="description-desktop">
              <p>
                Komship merupakan platform layanan pengiriman yang bertujuan
                memudahkan kamu untuk mengirim paket yang didukung dengan metode
                COD atau Non-COD tanpa batas minimum pengiriman. Kamu juga dapat
                mencairkan pendapatan COD kamu kapanpun itu tanpa harus
                menunggu, karena setiap paket kamu dibayar maka saat itu juga
                kamu bisa mencairkan. Komship memberikan kemudahan untuk UMKM,
                Pebisnis Online, atau seluruh warga Indonesia yang akan atau
                ingin mengirim paket kemanapun.
              </p>
              <p>
                Dengan layanan yang ditawarkan kami akan memberikan pengalaman
                pengiriman yang dapat kamu rasakan perbedaannya. Kami juga
                berkomitmen dan akan berkontribusi aktif dalam perkembangan
                perekonomian Indonesia, khususnya untuk UMKM, Pebisnis Online
                supaya terus berkembang.
              </p>
            </div>
          </div>
          <div class="col-md-6 image">
            <img :src="require('@/assets/img/hero/about-model.png')" />
          </div>
          <div class="description-mobile">
            <p>
              Komship merupakan <i>platform</i> layanan pengiriman yang
              memudahkan kamu untuk mengirim paket yang didukung dengan metode
              COD atau Non-COD tanpa batas minimum pengiriman. Kamu juga dapat
              mencairkan pendapatan COD kamu kapanpun itu tanpa harus menunggu,
              karena setiap paket kamu dibayar maka saat itu juga kamu bisa
              mencairkan.
            </p>
            <p>
              Komship memberikan kemudahan untuk UMKM, Pebisnis Online, atau
              seluruh warga Indonesia yang akan atau ingin mengirim paket
              kemanapun.
            </p>
            <p>
              layanan yang ditawarkan kami akan memberikan pengalaman pengiriman
              yang dapat kamu rasakan perbedaannya. Kami juga berkomitmen dan
              akan berkontribusi aktif dalam perkembangan perekonomian
              Indonesia, khususnya untuk UMKM, Pebisnis Online supaya terus
              berkembang.
            </p>
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
      title: "Tentang Kami",
    });
  },
};
</script>
<style>
.about {
  background-color: #f8f9fa;
  height: 100%;
  padding: 8vh 0;
}
.about .content {
  margin: auto;
}
.about .title {
  font-weight: 700;
}
.about .description-mobile {
  display: none;
}
.about .description-desktop {
  margin-top: 2vw;
  width: 85%;
  text-align: justify;
}
.about .image {
  margin: auto;
}
.about img {
  width: 100%;
}
@media only screen and (max-width: 540px) {
  .about .title {
    display: flex;
    justify-content: center;
    margin-bottom: 5vw;
  }
  .about .description-desktop {
    display: none;
  }
  .about .description-mobile {
    display: unset;
    width: 90%;
    margin: auto;
    padding-top: 5vw;
    text-align: justify;
  }
}
</style>
