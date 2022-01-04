import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Property from "../views/Property.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/property/:id",
    name: "property",
    component: Property,
    props: true
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
