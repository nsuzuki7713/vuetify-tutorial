import Vue from "vue";
import VueRouter from "vue-router";
import Color from "../components/Color.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/color",
    name: "Color",
    component: Color
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
