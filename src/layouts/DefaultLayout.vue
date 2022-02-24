<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} ` : `Komship.id`
    }}</template>
  </metainfo>
  <router-view />
</template>
<script>
export default {
  name: "DefaultLayout",
};
</script>
