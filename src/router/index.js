import Vue from "vue";
import VueRouter from "vue-router";
import Color from "../components/Color.vue";
import Content from "../components/Content.vue";
import Display from "../components/Display.vue";
import Flex from "../components/Flex.vue";
import Float from "../components/Float.vue";
import Text from "../components/Text.vue";
import Typography from "../components/Typography.vue";
import Alert from "../components/Alert.vue";
import Avatar from "../components/Avatar.vue";
import Badges from "../components/Badge.vue";

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
  },
  {
    path: "/float",
    name: "Float",
    component: Float
  },
  {
    path: "/text",
    name: "Text",
    component: Text
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography
  },
  {
    path: "/alert",
    name: "Alert",
    component: Alert
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: Avatar
  },
  {
    path: "/badges",
    name: "Badges",
    component: Badges
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
