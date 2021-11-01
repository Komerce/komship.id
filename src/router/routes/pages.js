import Home from '../../views/pages/Home.vue'
import About from '../../views/pages/About.vue'
import Privacy from '../../views/pages/Privacy.vue'
import Faq from '../../views/pages/Faq.vue'
import Terms from '../../views/pages/Terms.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms
  },
];
export default routes;