/* eslint-disable no-unused-vars */
var PrerenderSpaPlugin = require("prerender-spa-plugin");
var path = require("path");
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

module.exports = {
  transpileDependencies: ["vue-meta"],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSpaPlugin(
          path.resolve(__dirname, "./dist"),
          // List of routes to prerender
          // ["/", "/about", "/privacy", "/faq", "/terms", "/cek-ongkir"],
          {
            // options
            ignoreJSErrors: true,
          }
        ),
      ],
    };
  },
};
