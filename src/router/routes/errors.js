import Error404 from "../../views/errors/Error-404.vue";

const routes = [
  {
    path: "/error-404",
    name: "Error404",
    component: Error404,
    meta: {
      layout: "ErrorLayout",
    },
  },
];
export default routes;
