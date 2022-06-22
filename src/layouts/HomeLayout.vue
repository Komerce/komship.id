<template>
  <div data-spy="scroll" data-target=".navbar" data-offset="50">
    <Navbar />
    <div style="padding-top: 80px">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import "@/assets/css/app.css";
import Navbar from "@/components/Navbar/HomeNavbar.vue";
import Footer from "@/components/Footer/HomeFooter.vue";
import { useMeta } from "vue-meta";
export default {
  name: "HomeLayout",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    useMeta({
      title: "Komship.id",
      htmlAttrs: { lang: "id", amp: true },
      link: [{ rel: "icon", href: require("@/assets/img/logo/komship.png") }],
    });
  },
};
</script>
