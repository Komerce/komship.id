<template>
  <v-app>
    <Header />
    <v-main>
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
