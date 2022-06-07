var vuePrerender = require('vue-prerender');
var options = {
  logLevel: 3,
  parseRouter: true,
  tidy: true
};

vuePrerender('dist', options);