import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollactive from "vue-scrollactive";
import { createMetaManager } from "vue-meta";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);
app.use(router);
app.use(VueScrollactive);
app.use(createMetaManager());
app.mount("#app");
