<template>
  <v-footer style="background-color: #f6f6f9">
    <div class="container">
      <div class="col-md-12">
        <div class="row">
          <div class="col-lg-6 col-md-8 profile">
            <v-img
              :src="require('@/assets/img/logo/komship-logo.png')"
              class="profile-image"
            />
            <div class="row">
              <div class="profile-icon">
                <v-img
                  :src="require('@/assets/img/icons/location-icon.png')"
                  max-width="30px"
                  min-width="25px"
                />
              </div>
              <div class="profile-desc">
                Jl. Raya Tamansari, Kompleks Karangwuni, Desa Tamansari,
                Karangmoncol, Kab. Purbalingga, Jawa Tengah 53355
              </div>
            </div>
            <div class="row">
              <div class="profile-icon">
                <v-img
                  :src="require('@/assets/img/icons/email-icon.png')"
                  max-width="30px"
                  min-width="20px"
                />
              </div>
              <div class="profile-desc">support@komship.id</div>
            </div>
            <div class="row">
              <div class="profile-icon">
                <v-img
                  :src="require('@/assets/img/icons/call-icon.png')"
                  max-width="30px"
                  min-width="20px"
                />
              </div>
              <div class="profile-desc">081227931840</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 company">
            <h5 class="company-title">Perusahaan</h5>
            <ul class="company-link">
              <li>
                <router-link to="about"> Tentang Kami </router-link>
              </li>
              <li>
                <router-link to="terms"> Syarat & Ketentuan </router-link>
              </li>
              <li>
                <router-link to="privacy"> Kebijakan privasi </router-link>
              </li>
              <li>
                <router-link to="faq"> FAQ </router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-8 partner">
            <h5 class="partner-title">Kerjasama Ekspedisi</h5>
            <div class="image-partner">
              <v-img
                :src="require('@/assets/img/logo/jne-logo.png')"
                max-width="100px"
              />
            </div>
          </div>
          <div class="col-lg-12 col-md-4 contact">
            <v-img
              :src="require('@/assets/img/icons/whatsapp-icon.png')"
              class="ml-3"
              max-width="30px"
            />
            <v-img
              :src="require('@/assets/img/icons/instagram-icon.png')"
              class="ml-3"
              max-width="30px"
            />
            <v-img
              :src="require('@/assets/img/icons/facebook-icon.png')"
              class="ml-3"
              max-width="30px"
            />
          </div>
        </div>
        <div class="copyright row d-flex">
          Copyright 2021 komship.id. All rights reserved.
        </div>
      </div>
    </div>
  </v-footer>
</template>
<style>
.profile {
  color: #828282;
}
.profile .profile-image {
  max-width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.profile .profile-icon {
  width: 10%;
}
.profile .profile-desc {
  width: 70%;
}
.profile .row {
  margin-bottom: 10px;
}
.company .company-title {
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 20px;
}
.company-link {
  list-style-type: none;
  padding-left: 0;
}
.company-link li {
  margin: 8px 0;
}
.company-link a {
  color: #828282;
  text-decoration: none;
}
.company-link a:hover {
  color: #ff6a3a;
}
.partner .partner-title {
  font-weight: 600;
  margin-top: 60px;
}
.image-partner {
  margin-left: 3vw;
}
.contact {
  padding-top: 50px;
  display: flex;
  justify-content: end;
}
.copyright {
  color: #828282;
}
@media only screen and (max-width: 991px) {
  .contact {
    padding-top: 0;
    justify-content: start;
  }
}
@media only screen and (max-width: 540px) {
  .profile .profile-image {
    width: 135px;
  }
  .profile .profile-desc {
    width: 80%;
  }
  .company .company-title {
    margin-top: 5vw;
  }
  .partner .partner-title {
    margin-top: 5vw;
  }
  .contact {
    padding-top: 5vw;
    padding-bottom: 8vw;
  }
}
@media only screen and (max-width: 360px) {
  .profile .profile-desc {
    width: 90%;
  }
}
</style>
