import { createRouter, createWebHistory } from "vue-router";

import pages from "./routes/pages";
import errors from "./routes/errors";

const routes = [
  ...pages,
  ...errors,
  { path: "/:pathMatch(.*)*", redirect: "/error-404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
