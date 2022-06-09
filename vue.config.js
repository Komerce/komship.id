/* eslint-disable no-unused-vars */
var PrerenderSpaPlugin = require("prerender-spa-plugin");
var path = require("path");
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

module.exports = {
  transpileDependencies: ["vue-meta"],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSpaPlugin({
          staticDir: path.join(__dirname, "dist"),
          outputDir: path.join(__dirname, "dist"),
          routes: ["/", "/about", "/privacy", "/terms", "/cek-ongkir"],
          renderer: new Renderer({
            maxConcurrentRoutes: 10,
            headless: true,
            renderAfterDocumentEvent: 'vue-post-render',
          })
        }),
      ],
    };
  },
};
