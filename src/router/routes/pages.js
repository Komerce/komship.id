const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/pages/Home/Index.vue"),
    meta: {
      layout: "HomeLayout",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/pages/About.vue"),
    meta: {
      layout: "HomeLayout",
    },
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import("@/views/pages/Privacy.vue"),
    meta: {
      layout: "HomeLayout",
    },
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("@/views/pages/Faq.vue"),
    meta: {
      layout: "HomeLayout",
    },
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("@/views/pages/Terms.vue"),
    meta: {
      layout: "HomeLayout",
    },
  },
];
export default routes;
