import Home from '../../views/pages/Home.vue'
import About from '../../views/pages/About.vue'
import Privacy from '../../views/pages/Privacy.vue'
import Faq from '../../views/pages/Faq.vue'
import Terms from '../../views/pages/Terms.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
    meta: {
      layout: 'DefaultLayout'
    }
  },
];
export default routes;