<template>
  <div>
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
export default {
  name: "HomeLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
