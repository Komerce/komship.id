<template>
  <nav class="navbar navbar-expand-xl navbar-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" @click="goto('home')">
        <img
          :src="require('@/assets/img/logo/new-logo.svg')"
          alt="logo komship"
          class="image-navbar"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img
          :src="require('@/assets/img/icons/toggler-icon.png')"
          alt="toggler icon"
        />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse nav-menu">
        <div class="close-toggler">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Close"
          >
            <img
              :src="require('@/assets/img/icons/close-icon.png')"
              alt="close icon"
            />
          </button>
        </div>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="(items, index) in listMenu"
            :key="index + 1"
          >
            <a
              :id="items.id"
              :href="items.id !== 'cek-ongkir' ? `/#${items.value}` : `/${items.value}`"
              :class="menu === items.id ? 'nav-link active' : 'nav-link'"
              @click="setMenuActive(items.id)"
            >
              {{ items.title }}
            </a>
          </li>
          <!-- <li class="nav-item">
            <router-link
              id="cek-ongkir"
              class="nav-link"
              to="/cek-ongkir"
              @click="setRouterActive('cek-ongkir')"
            >
              Cek Ongkir
            </router-link>
          </li> -->
        </ul>
        <button
          class="btn btn-outline-primary btn-sign-in"
          @click="openWindow('https://partner.komerce.id/')"
        >
          Masuk
        </button>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      menu: "navmenuhome",
      hashrouteid: "",

      listMenu: [
        {
          id: "navmenuhome",
          title: "Beranda",
          value: "home",
        },
        {
          id: "navmenuservice",
          title: "Layanan",
          value: "service",
        },
        {
          id: "navmenualur",
          title: "Alur Pengiriman",
          value: "alur",
        },
        {
          id: "navmenufitur",
          title: "Fitur",
          value: "feature",
        },
        {
          id: "cek-ongkir",
          title: "Cek Ongkir",
          value: "cek-ongkir",
        },
      ],
      navBerandaIsActive: true,
    };
  },
  watch: {
    hashrouteid(val, oldval) {
      if (!oldval) {
        this.toggleClassNav(`navmenu${val}`);
      } else {
        this.toggleClassNav(`navmenu${val}`);
        this.toggleClassNav(`navmenu${oldval}`);
      }
    },
  },
  mounted() {
    // if (this.$route.hash && this.$route.hash !== "#") {
    //   this.goto(this.$route.hash.substring(1));
    // } else {
    //   this.toggleClassNav("navmenuhome");
    // }
    if (window.history.state.current === '/cek-ongkir') {
      this.menu = 'cek-ongkir'
    }
    if (window.history.state.current === '/#home') {
      window.scrollTo(0, 0)
    }
    if (window.history.state.current === '/#service') {
      window.scrollTo(0, 608)
    }
    if (window.history.state.current === '/#alur') {
      window.scrollTo(0, 2546)
    }
    if (window.history.state.current === '/#feature') {
      window.scrollTo(0, 3436)
    }
  },
  methods: {
    toggleClassNav(id) {
      if (document.getElementById(id)) {
        document.getElementById(id).classList.toggle("active");
      }
    },
    goto(id) {
      this.hashrouteid = id;
      // let offsetPosition = 0;
      // document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      const element = document.getElementById(`${id}section`);
      const headerOffset = 80; // height container header nav
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        // console.log('window.pageYOffset', window.pageYOffset)
        // console.log('elementPosition', elementPosition)
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        // console.log('offsetPosition', offsetPosition)
        // switch(id) {
        //   case 'service':
        //     offsetPosition = 600
        //     break;
        //   case 'alur':
        //     offsetPosition = 1800
        //     break;
        //   case 'feature':
        //     offsetPosition = 2600
        //     break;
        //   default:
        //     break;
        // }
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    openWindow(url) {
      window.open(url);
    },
    onItemChanged(event, currentItem, lastActiveItem) {
      console.log(event, currentItem, lastActiveItem);
      // here you have access to everything you need regarding that event
    },
    setMenuActive(id) {
      if (this.navBerandaIsActive === true) {
        this.navBerandaIsActive = false;
      } else {
        this.navBerandaIsActive = true;
      }
      this.menu = id;
    },
    async setRouterActive(link) {
      let active = document.getElementsByClassName("nav-link");
      if (active.length > 0) {
        active[0].classList.remove("active");
      }
      let menufitur = document.getElementById("navmenufitur");
      menufitur.classList.add("active");
      let menu = document.getElementById(link);
      menu.classList.add("active");
    },
  },
};
</script>
<style>
.navbar {
  background-color: #ffffff;
  max-height: 80px;
  font-family: "Poppins", sans-serif;
}
.image-navbar {
  margin-left: 4vw;
}
.btn-sign-in {
  width: 151px;
  height: 56px;
  margin: auto 5vw;
}
.nav-link {
  cursor: pointer;
}
.nav-item {
  padding-left: 2.5vw;
}
.nav-item .active {
  color: #f95031 !important;
}
.nav-item .active:before {
  content: "";
  position: absolute;
  bottom: 10px;
  width: 30px;
  border-bottom: 2px solid #f95031;
}
.navbar-toggler {
  border-color: #f95031 !important;
  box-shadow: unset !important;
  margin-right: 2.5vw;
}
.close-toggler {
  display: none;
}
@media only screen and (max-width: 1199.98px) {
  .close-toggler {
    display: flex;
    float: right;
  }
  .close-toggler button {
    background-color: #f95031;
    border: none;
  }
  .nav-menu {
    background-color: #f95031;
    top: 0;
    left: 0;
    padding: 5vw;
    position: absolute;
    display: block;
    width: 100%;
    z-index: 9;
  }
  .navbar-nav {
    margin-top: 3vw;
  }
  .nav-item a {
    color: #ffffff !important;
    font-weight: 600 !important;
    margin-bottom: 1vw;
  }
  .nav-item .active {
    color: #ffffff !important;
    font-weight: 700;
  }
  .btn-sign-in {
    padding: 0px !important;
    margin: 0px 0px 0px 6px;
    width: 200px;
    height: 42px;
    border-radius: 8px !important;
    color: #dc3545 !important;
    font-weight: 600 !important;
    background-color: white !important;
  }
}
@media only screen and (max-width: 540px) {
  .navbar-brand img {
    width: 135px;
  }
}
</style>
