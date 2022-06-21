/* eslint-disable no-unused-vars */
const { PuppeteerPrerenderPlugin } = require("puppeteer-prerender-plugin");
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = {
  transpileDependencies: ["vue-meta"],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        // new HtmlWebpackPlugin({
        //   template: "index.html", // Generates dist/index.html first
        // }),
        new PuppeteerPrerenderPlugin({
          enabled: process.env.NODE_ENV !== "development",
          entryDir: config.output.path,
          outputDir: config.output.path,
          postProcess: (result) => {
            console.log("ROUTE", result.route);
            if (result.route === "/404") {
              result.outputPath = path.join(config.output.path, "/404.html");
            }
            if (result.route === "/cek-ongkir") {
              result.outputPath = path.join(
                config.output.path,
                "/cek-ongkir.html"
              );
            }
            const dom = new JSDOM(result.html);
            const app = dom.window.document.querySelector("div#app");
            if (app) {
              // Remove app HTML since Vue 3 cannot hydrate non-SSR markup
              app.innerHTML = "";
            }

            result.html = dom.serialize();
          },
          renderAfterEvent: "__RENDERED__",
          routes: ["/", "/cek-ongkir"],
        }),
      ],
    };
  },
};
