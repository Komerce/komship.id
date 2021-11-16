<template>
  <v-app>
    <Header />
    <v-main style="margin-top: 80px">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Header from "../components/headers/Default.vue";
import Footer from "../components/footers/Default.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
