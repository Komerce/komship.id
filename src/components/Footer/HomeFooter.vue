<template>
  <footer style="background-color: #f6f6f9">
    <div class="container">
      <div class="col-md-12">
        <div class="row container">
          <div class="col-lg-6 col-md-8 profile">
            <router-link to="/">
              <img
                :src="require('@/assets/img/logo/logo-by-komship.svg')"
                alt="logo komship"
                class="profile-image"
              />
            </router-link>
            <div class="row">
              <div class="col-1" style="padding-right: 0px">
                <img
                  :src="require('@/assets/img/icons/location-icon.png')"
                  alt="location icon"
                  max-width="30px"
                  min-width="25px"
                />
              </div>
              <div class="col-11">Head Office Komerce</div>
              <div class="col-10 offset-1">
                Jln. Sawah Tengah No. 1 Desa Tunjungmuli Kecamatan Karangmoncol
                Kabupaten Purbalingga (53355)
              </div>
            </div>
            <div class="row">
              <div class="col-1" style="padding-right: 0px">
                <img
                  :src="require('@/assets/img/icons/email-icon.png')"
                  alt="email icon"
                  max-width="30px"
                  min-width="20px"
                />
              </div>
              <div class="col-11">bd@komship.id</div>
            </div>
            <div class="row">
              <div class="col-1">
                <img
                  :src="require('@/assets/img/icons/call-icon.png')"
                  alt="call icon"
                  max-width="30px"
                  min-width="20px"
                />
              </div>
              <div class="col-11">081328014170</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 company">
            <h3 class="company-title">Perusahaan</h3>
            <ul class="company-link">
              <li>
                <router-link to="about" @click="resetNavBarActive()">
                  Tentang Kami
                </router-link>
              </li>
              <li>
                <router-link to="terms" @click="resetNavBarActive()">
                  Syarat &amp; Ketentuan
                </router-link>
              </li>
              <li>
                <router-link to="privacy" @click="resetNavBarActive()">
                  Kebijakan privasi
                </router-link>
              </li>
              <li>
                <router-link to="faq" @click="resetNavBarActive()">
                  FAQ
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-8 partner">
            <h3 class="partner-title mb-4">Kerjasama Ekspedisi</h3>
            <div class="image-partner">
              <img
                :src="require('@/assets/img/logo/logo_jne.png')"
                alt="logo jne"
                class="image-partner-img mb-3"
                style="widht=109px"
              />
              <img
                :src="require('@/assets/img/logo/Sicepat_logo.png')"
                alt="logo jne"
                class="image-partner-img"
                style="widht=139px"
              />
              <img
                :src="require('@/assets/img/logo/id_express_logo.png')"
                alt="logo jne"
                class="image-partner-img"
                style="widht=139px"
              />
            </div>
          </div>
          <div class="col-lg-12 col-md-4 contact">
            <img
              :src="require('@/assets/img/icons/facebook-icon.png')"
              alt="facebook icon"
            />
            <img
              :src="require('@/assets/img/icons/instagram-icon.png')"
              alt="instagram icon"
              class="ml-3"
              @click="openLink('https://instagram.com/komship')"
            />
            <img
              :src="require('@/assets/img/icons/whatsapp-icon.png')"
              alt="whatsapp icon"
              class="ml-3"
              @click="openLink('https://wa.me/6281328014170')"
            />
          </div>
        </div>
        <div class="copyright row d-flex">
          Copyright 2022 Komship.id. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    openLink(link) {
      window.open(link);
    },
    resetNavBarActive() {
      document.getElementById("navmenuhome").classList.remove("active");
      document.getElementById("navmenuservice").classList.remove("active");
      document.getElementById("navmenualur").classList.remove("active");
      document.getElementById("navmenufitur").classList.remove("active");
    },
  },
};
</script>
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
  font-size: 18px;
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
  font-size: 18px;
  margin-top: 60px;
}
.image-partner {
  margin-left: 10px;
}
.image-partner-img {
  width: 100px;
}
.contact {
  padding-top: 50px;
  display: flex;
  justify-content: end;
}
.contact img {
  cursor: pointer;
  max-width: 30px;
  max-height: 30px;
  margin-left: 1vw;
}
.copyright {
  color: #828282;
}
@media only screen and (max-width: 991px) {
  .contact {
    padding-top: 45px;
    justify-content: start;
  }
  .partner .partner-title {
    font-weight: 600;
    margin-top: 45px;
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
    margin-left: 3vw;
    padding-bottom: 8vw;
  }
  .copyright {
    display: flex;
    justify-content: center;
  }
}
@media only screen and (max-width: 360px) {
  .profile .profile-desc {
    width: 90%;
  }
}
</style>
