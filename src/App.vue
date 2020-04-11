<template>
  <v-app>
    <router-link to="/color">color</router-link>
    <router-link to="/content">content</router-link>
    <router-link to="/display">display</router-link>
    <router-link to="/flex">flex</router-link>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
