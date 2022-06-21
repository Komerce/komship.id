<template>
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
