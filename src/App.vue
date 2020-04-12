<template>
  <v-app>
    <div class="d-flex">
      <router-link to="/color" class="ma-2">color</router-link>
      <router-link to="/content" class="ma-2">content</router-link>
      <router-link to="/display" class="ma-2">display</router-link>
      <router-link to="/flex" class="ma-2">flex</router-link>
      <router-link to="/float" class="ma-2">float</router-link>
      <router-link to="/text" class="ma-2">text</router-link>
      <router-link to="/typography" class="ma-2">typography</router-link>
      <router-link to="/alert" class="ma-2">alert</router-link>
      <router-link to="/avatar" class="ma-2">avatar</router-link>
      <router-link to="/badges" class="ma-2">badges</router-link>
      <router-link to="/banners" class="ma-2">banners</router-link>
    </div>
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
