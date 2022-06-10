<template>
  <teleport to="head">
    <component :is="script" type="application/ld+json">
      {"@context":"https://schema.org", "@type":"Organization",
      "name":"Komship", "legalName":"Komship",
      "logo":"https://komship.id/img/komship.png", "url":"https://komship.id/",
      "address":{"@type":"PostalAddress", "streetAddress":"Jl. Raya Tamansari,
      Kompleks Karangwuni, Desa Tamansari, Karangmoncol",
      "addressLocality":"Purbalingga", "postalCode":"53355",
      "addressCountry":"ID"}, "contactPoint":{"@type":"ContactPoint",
      "contactType":"Customer service", "email":"mailto:support@komship.id",
      "telephone":"081227931840"},
      "sameAs":["https://www.facebook.com/komship/",
      "https://www.instagram.com/komship/"]}
    </component>
  </teleport>
  <component :is="layout" />
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
export default {
  components: {
    DefaultLayout,
    HomeLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = DefaultLayout;
      }
    },
  },
};
</script>
