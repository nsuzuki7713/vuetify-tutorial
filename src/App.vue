<template>
  <v-app>
    <div class="d-flex">
      <router-link to="/color" class="ma-2">color</router-link>
      <router-link to="/content" class="ma-2">content</router-link>
      <router-link to="/display" class="ma-2">display</router-link>
      <router-link to="/flex" class="ma-2">flex</router-link>
      <router-link to="/float" class="ma-2">float</router-link>
    </div>
    <router-view></router-view>
  </v-app>
</template>
4
<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
