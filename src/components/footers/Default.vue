<template>
    <v-footer style="background-color:#F6F6F9;">
      <div class="container">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 profile">
              <v-img :src="require('@/assets/img/logo/komship-logo.png')" class="profile-image" />
              <div class="row">
                <div class="col-sm-1 profile-icon"><v-img :src="require('@/assets/img/icons/location-icon.png')" max-width="30px" min-width="25px" /></div>
                <div class="col-sm-8 profile-desc">Jl. Raya Tamansari, Kompleks Karangwuni, Desa Tamansari, Karangmoncol, Kab. Purbalingga, Jawa Tengah 53355</div>
              </div>
              <div class="row">
                <div class="col-sm-1 profile-icon"><v-img :src="require('@/assets/img/icons/email-icon.png')" max-width="30px" min-width="20px" /></div>
                <div class="col-sm-8 profile-desc">support@komship.id</div>
              </div>
              <div class="row">
                <div class="col-sm-1 profile-icon"><v-img :src="require('@/assets/img/icons/call-icon.png')" max-width="30px" min-width="20px" /></div>
                <div class="col-sm-8 profile-desc">081227931840</div>
              </div>
            </div>
            <div class="col-md-3 company">
              <h5 class="company-title">Perusahaan</h5>
              <ul class="company-link">
                <li><router-link to="about">Tentang Kami</router-link></li>
                <li><router-link to="terms">Syarat & Ketentuan</router-link></li>
                <li><router-link to="privacy">Kebijakan privasi</router-link></li>
                <li><router-link to="faq">FAQ</router-link></li>
              </ul>
            </div>
            <div class="col-md-3 partner">
              <h5 class="partner-title">Kerjasama Ekspedisi</h5>
              <div class="image-partner">
                <v-img :src="require('@/assets/img/logo/jne-logo.png')" max-width="100px" />
              </div>
            </div>
            <div class="col-md-12 contact">
              <v-img :src="require('@/assets/img/icons/whatsapp-icon.png')" class="ml-3" max-width="30px" />
              <v-img :src="require('@/assets/img/icons/instagram-icon.png')" class="ml-3" max-width="30px" />
              <v-img :src="require('@/assets/img/icons/facebook-icon.png')" class="ml-3" max-width="30px" />
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
.profile{
  color: #828282;
}
.profile .profile-image{
  max-width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.profile .row{
  margin-bottom: 10px;
}
.company .company-title{
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 20px;
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
.partner .partner-title{
  font-weight: 600;
  margin-top: 60px;
}
.image-partner{
  margin-left: 3vw;
}
.contact{
  padding-top: 50px;
  display: flex;
  justify-content: end;
}
.copyright{
  color: #828282;
}
@media screen and (max-width: 1024px) {
  .profile{
    width: 70%!important;
  }
  .profile-icon{
    width: 10%!important;
  }
  .profile-desc{
    width: 70%!important;
  }
  .company{
    width: 30%!important;
  }
  .partner{
    width: 70%!important;
  }
  .partner .partner-title{
    margin-top: 30px;
  }
  .contact{
    width: 30%!important;
    justify-content: start;
  }
  .contact img{
    padding-top: 0;
    top: 0;
  }
  .copyright{
    justify-content: center;
    margin-top: 50px!important;
  }
}
@media screen and (max-width: 720px) {
  .profile{
    width: 60%!important;
  }
  .company{
    width: 30%!important;
  }
  .partner{
    width: 60%!important;
  }
  .contact{
    width: 40%!important;
  }
}
@media screen and (max-width: 540px) {
  .profile{
    width: 100%!important;
  }
  .company{
    width: 100%!important;
  }
  .company .company-title{
    margin-top: 30px;
  }
  .partner{
    width: 100%!important;
  }
  .partner .partner-title{
    margin-top: 30px;
  }
  .contact{
    width: 100%!important;
  }
}
</style>