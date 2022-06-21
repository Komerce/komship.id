/* eslint-disable no-unused-vars */
const { PuppeteerPrerenderPlugin } = require("puppeteer-prerender-plugin");
var path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
          entryDir: "dist",
          outputDir: "dist",
          postProcess: (result) => {
            const dom = new JSDOM(result.html);
            const app = dom.window.document.querySelector("div#app");
            if (app) {
              // Remove app HTML since Vue 3 cannot hydrate non-SSR markup
              app.innerHTML = "";
            }

            result.html = dom.serialize();
          },
          renderAfterEvent: "__RENDERED__",
          routes: ["/"],
        }),
        new PuppeteerPrerenderPlugin({
          enabled: process.env.NODE_ENV !== "development",
          entryDir: path.join(__dirname, 'dist', 'cek-ongkir', 'index.html'),
          outputDir: path.join(__dirname, 'dist'),
          postProcess: (result) => {
            const dom = new JSDOM(result.html);
            const app = dom.window.document.querySelector("div#app");
            if (app) {
              // Remove app HTML since Vue 3 cannot hydrate non-SSR markup
              app.innerHTML = "";
            }

            result.html = dom.serialize();
          },
          renderAfterEvent: "__RENDERED__",
          routes: ["/'cek-ongkir"],
        }),
      ],
    };
  },
};
