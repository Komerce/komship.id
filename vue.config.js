/* eslint-disable no-unused-vars */
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");

module.exports = {
  transpileDependencies: ["vue-meta"],
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/cek-ongkir"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: (route) => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, "<script $1 defer>")
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      },
    },
  },
};
