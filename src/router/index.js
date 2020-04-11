import Vue from "vue";
import VueRouter from "vue-router";
import Color from "../components/Color.vue";
import Content from "../components/Content.vue";
import Display from "../components/Display.vue";
import Flex from "../components/Flex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/color",
    name: "Color",
    component: Color
  },
  {
    path: "/content",
    name: "Content",
    component: Content
  },
  {
    path: "/display",
    name: "Display",
    component: Display
  },
  {
    path: "/flex",
    name: "Flex",
    component: Flex
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
