import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from "vue-meta";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const app = createApp(App);
app.use(router);
app.config.globalProperties.$http = axios;
app.use(createMetaManager());
app.mount("#app");
