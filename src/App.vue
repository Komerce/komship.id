<template>
  <component :is="layout" />
</template>

<script>
import '@/assets/css/app.css'
import DefaultLayout from "@/layouts/Default.vue";
import ErrorLayout from "@/layouts/Error.vue";

export default {
  components: {
    DefaultLayout,
    ErrorLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      }
    },
  },
};
</script>