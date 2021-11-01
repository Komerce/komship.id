<template>
    <v-footer style="background-color:#F6F6F9;">
      <div class="container">
        <div class="col-md-12">
          <div class="row mb-5">
            <div class="profile col-md-6">
              <v-img :src="require('@/assets/img/komship-logo.png')" width="200px" />
              <div class="row mb-2">
                <div class="col-sm-1"><v-img :src="require('@/assets/img/icons/location-icon.png')" /></div>
                <div class="col-sm-6">Jl. Raya Tamansari, Kompleks Karangwuni, Desa Tamansari, Karangmoncol, Kab. Purbalingga, Jawa Tengah 53355</div>
              </div>
              <div class="row mb-2">
                <div class="col-sm-1"><v-img :src="require('@/assets/img/icons/email-icon.png')" /></div>
                <div class="col-sm-6">support@komship.id</div>
              </div>
              <div class="row mb-2">
                <div class="col-sm-1"><v-img :src="require('@/assets/img/icons/call-icon.png')" /></div>
                <div class="col-sm-6">081227931840</div>
              </div>
            </div>
            <div class="company col-md-3">
              <h5>Perusahaan</h5>
              <ul class="company-link">
                <li><router-link to="about">Tentang Kami</router-link></li>
                <li><router-link to="terms">Syarat & Ketentuan</router-link></li>
                <li><router-link to="privacy">Kebijakan privasi</router-link></li>
                <li><router-link to="faq">FAQ</router-link></li>
              </ul>
            </div>
            <div class="partner col-md-3">
              <h5>Kerjasama Ekspedisi</h5>
              <div class="image-partner">
                <v-img :src="require('@/assets/img/jne-logo.png')" max-width="100px" />
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-end">
            <v-img :src="require('@/assets/img/icons/whatsapp-icon.png')" max-width="50px" />
            <v-img :src="require('@/assets/img/icons/instagram-icon.png')" max-width="50px" />
            <v-img :src="require('@/assets/img/icons/facebook-icon.png')" max-width="50px" />
          </div>
          <div class="copyright row d-flex">
            Copyright 2021 komship.id. All rights reserved.
          </div>
        </div>
      </div>
    </v-footer>
</template>
<style>
.profile{
  color: #828282;
}
.company h5{
  font-weight: 600;
  margin: 20px 0;
}
.company-link{
  list-style-type: none;
  padding-left: 0;
}
.company-link li{
  margin: 8px 0;
}
.company-link a{
  color: #828282;
  text-decoration: none;
}
.company-link a:hover{
  color: #FF6A3A;
}
.partner h5{
  font-weight: 600;
  margin-top: 20px;
}
.image-partner{
  margin-left: 3vw;
}
.copyright{
  color: #828282;
}
</style>