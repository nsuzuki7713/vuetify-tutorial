// https://vuetifyjs.com/ja/components/banners/
<template>
  <div>
    <h1>Single-line (desktop)</h1>
    <v-card>
      <v-system-bar></v-system-bar>
      <v-toolbar flat>
        <v-toolbar-title>My Document</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-switch
            v-model="sticky"
            label="Sticky Banner"
            hide-details
          ></v-switch>
        </div>
      </v-toolbar>
      <v-banner single-line :sticky="sticky">
        We can't save your edits while you are in offline mode.

        <template v-slot:actions>
          <v-btn text color="deep-purple accent-4">Get Online</v-btn>
        </template>
      </v-banner>
      <v-card-text class="grey lighten-4">
        <v-sheet max-width="800" height="300" class="mx-auto">sssss</v-sheet>
      </v-card-text>
    </v-card>
    <h1>Two-line (mobile)</h1>
    <v-banner>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus
      nec sem id malesuada. Curabitur lacinia sem et turpis euismod, eget
      elementum ex pretium.
      <template v-slot:actions>
        <v-btn text color="primary">Dismiss</v-btn>
        <v-btn text color="primary">Retry</v-btn>
      </template>
    </v-banner>

    <h1>Iconスロット</h1>
    <v-banner two-line>
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon icon="mdi-lock" color="white">
          mdi-lock
        </v-icon>
      </v-avatar>

      Three line text string example with two actions. One to two lines is
      preferable. Three lines should be considered the maximum string length on
      desktop in order to keep messages short and actionable.

      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4">Action</v-btn>
        <v-btn text color="deep-purple accent-4">Action</v-btn>
      </template>
    </v-banner>

    <h1>アイコンをクリックしたときのイベント</h1>
    <v-banner single-line @click:icon="alert">
      <v-icon slot="icon" color="warning" size="36">
        mdi-wifi-strength-alert-outline
      </v-icon>
      Unable to verify your Internet connection

      <template v-slot:actions>
        <v-btn color="primary" text>
          Connecting Settings
        </v-btn>
      </template>
    </v-banner>

    <h1>アクションスロット</h1>
    <v-checkbox v-model="v0" label="Visible"></v-checkbox>
    <v-banner v-model="v0" single-line transition="slide-y-transition">
      No Internet connection
      <template v-slot:actions="{ dismiss }">
        <v-btn text color="primary" @click="dismiss">Dismiss</v-btn>
        <v-btn text color="primary">Retry</v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script>
export default {
  data: () => ({
    v0: true
  }),
  methods: {
    alert() {
      alert("Hello, World!");
    }
  }
};
</script>
