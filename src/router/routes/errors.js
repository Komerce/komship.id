const routes = [
  {
    path: "/error-404",
    name: "Error404",
    component: () => import("@/views/errors/Error404.vue"),
  },
];
export default routes;
