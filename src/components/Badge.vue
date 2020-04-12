// https://vuetifyjs.com/ja/components/badges/
<template>
  <div>
    <h1>タブ</h1>
    <v-toolbar>
      <v-tabs dark background-color="primary" grow>
        <v-tab>
          <v-badge color="pink" dot>
            Item One
          </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" content="6">
            Item Two
          </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="deep-purple accent-4" icon="mdi-vuetify">
            Item Three
          </v-badge>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <h1>ホバー表示</h1>
    <div class="text-center">
      <v-badge
        :value="hover"
        color="deep-purple accent-4"
        content="9999+"
        left
        transition="slide-x-transition"
      >
        <v-hover v-model="hover">
          <v-icon color="grey lighten-1" large>
            mdi-account-circle
          </v-icon>
        </v-hover>
      </v-badge>
    </div>

    <h1>動的通知</h1>
    <v-container>
      <v-row justify="space-around">
        <div>
          <v-btn class="mx-1" color="primary" @click="messages++">
            Send Message
          </v-btn>

          <v-btn class="mx-1" color="error" @click="messages = 0">
            Clear Notifications
          </v-btn>
        </div>

        <v-badge :content="messages" :value="messages" color="green" overlap>
          <v-icon large>mdi-email</v-icon>
        </v-badge>
      </v-row>
    </v-container>

    <h1>カスタマイズのオプション</h1>
    <v-container>
      <v-row align="center" justify="center">
        <v-badge bordered color="error" icon="mdi-lock" overlap>
          <v-btn class="white--text" color="error" depressed>
            Lock Account
          </v-btn>
        </v-badge>

        <div class="mx-3"></div>

        <v-badge
          bordered
          bottom
          color="deep-purple accent-4"
          dot
          offset-x="10"
          offset-y="10"
        >
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>

        <div class="mx-3"></div>

        <v-badge avatar bordered overlap>
          <template v-slot:badge>
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
            </v-avatar>
          </template>

          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>
        </v-badge>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    hover: false,
    messages: 0,
    show: false
  })
};
</script>
