import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from "vue-meta";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createHead } from '@vueuse/head'

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
const head = createHead();

const app = createApp(App);
app.use(router);
app.config.globalProperties.$http = axios;
app.AOS = new AOS.init({
  once: true,
});

app.use(head);
app.use(createMetaManager());
app.mount("#app");
