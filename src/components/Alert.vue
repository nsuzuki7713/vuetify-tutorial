// https://vuetifyjs.com/ja/components/alerts/
<template>
  <div>
    <h1>タイプ</h1>
    <v-alert type="success">
      I'm a success alert.
    </v-alert>

    <v-alert type="info">
      I'm an info alert.
    </v-alert>

    <v-alert type="warning">
      I'm a warning alert.
    </v-alert>

    <v-alert type="error">
      I'm an error alert.
    </v-alert>

    <h1>ボーダー</h1>
    <v-alert border="top" color="red lighten-2" dark>
      I'm an alert with a top border and red color
    </v-alert>
    <v-alert border="right" color="blue-grey" dark>
      I'm an alert with a right border and blue-grey color
    </v-alert>
    <v-alert border="bottom" color="pink darken-1" dark>
      I'm an alert with a bottom border and pink color
    </v-alert>
    <v-alert border="left" color="indigo" dark>
      I'm an alert with a border left type info
    </v-alert>

    <h1>色付きボーダー</h1>
    <v-alert
      border="left"
      colored-border
      color="deep-purple accent-4"
      elevation="2"
    >
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut
      velit. Nulla facilisi.. Morbi mollis tellus ac sapien. Fusce vel dui.
      Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit
      lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
      nisi.
    </v-alert>
    <v-alert border="top" colored-border type="info" elevation="2">
      Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut
      varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod
      vitae, posuere imperdiet, leo. Morbi nec metus.
    </v-alert>
    <v-alert border="bottom" colored-border type="warning" elevation="2">
      Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non,
      auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor
      et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue
      velit cursus nunc, quis gravida magna mi a libero. Donec elit libero,
      sodales nec, volutpat a, suscipit non, turpis.
    </v-alert>
    <v-alert border="right" colored-border type="error" elevation="2">
      Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec
      posuere vulputate arcu.
    </v-alert>

    <h1>高さが詰まったスタイル</h1>
    <v-alert dense type="info">
      I'm a dense alert with a <strong>type</strong> of info
    </v-alert>
    <v-alert dense text type="success">
      I'm a dense alert with the <strong>text</strong> prop and a
      <strong>type</strong> of success
    </v-alert>
    <v-alert dense border="left" type="warning">
      I'm a dense alert with the <strong>border</strong> prop and a
      <strong>type</strong> of warning
    </v-alert>
    <v-alert dense outlined type="error">
      I'm a dense alert with the <strong>outlined</strong> prop and a
      <strong>type</strong> of error
    </v-alert>

    <h1>閉じるボタン付き</h1>
    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
    >
      閉じるボタン付きアラート
    </v-alert>
    <div class="text-center">
      <v-btn
        v-if="!alert"
        color="deep-purple accent-4"
        dark
        @click="alert = true"
      >
        Reset
      </v-btn>
    </div>

    <h1>アラート</h1>
    <v-alert color="#2A3B4D" dark icon="mdi-firework" dense>
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
      Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
    </v-alert>
    <v-alert color="#C51162" dark icon="mdi-material-design" border="right">
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci
      lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio
      lacinia tincidunt.
    </v-alert>
    <v-alert color="primary" dark icon="mdi-vuetify" border="left" prominent>
      Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus
      in, viverra quis, feugiat a, tellus. Proin viverra, ligula sit amet
      ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac
      eros. Curabitur at lacus ac velit ornare lobortis.
    </v-alert>

    <h1>アウトライン</h1>
    <v-alert outlined color="purple">
      <div class="title">Lorem Ipsum</div>
      <div>
        Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi,
        condimentum viverra felis nunc et lorem. Duis vel nibh at velit
        scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere,
        tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
        dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum,
        tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
      </div>
    </v-alert>
    <v-alert outlined type="success" text>
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula
      eget dolor. Praesent ac massa at ligula laoreet iaculis. Vestibulum
      ullamcorper mauris at ligula.
    </v-alert>
    <v-alert outlined type="warning" prominent border="left">
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
      Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem.
      Pellentesque dapibus hendrerit tortor.
    </v-alert>

    <h1>Prominent （目立たせる）</h1>
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow"
          >Nunc nonummy metus. Nunc interdum lacus sit amet orci. Nullam dictum
          felis eu pede mollis pretium. Cras id dui.</v-col
        >
        <v-col class="shrink">
          <v-btn>Take action</v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <v-alert color="blue-grey" dark dense icon="mdi-school" prominent>
      Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui.
      Aenean ut eros et nisl sagittis vestibulum. Sed aliquam ultrices mauris.
      Donec vitae orci sed dolor rutrum auctor.
    </v-alert>
    <v-alert icon="mdi-shield-lock-outline" prominent text type="info">
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Sed
      in libero ut nibh placerat accumsan.. Curabitur blandit mollis lacus.
      Curabitur blandit mollis lacus.
    </v-alert>

    <h1>テキスト</h1>
    <v-alert text color="info">
      <h3 class="headline">Lorem Ipsum</h3>
      <div>
        Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices
        tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
        Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
        sapien, a accumsan nisi mauris ac eros. Curabitur turpis.
      </div>

      <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

      <v-row align="center" no-gutters>
        <v-col class="grow"
          >Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam
          imperdiet imperdiet orci.</v-col
        >
        <v-spacer></v-spacer>
        <v-col class="shrink">
          <v-btn color="info" outlined>
            Okay
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <v-alert text outlined color="deep-orange" icon="mdi-fire">
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
      Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus,
      elementum eu, semper a, adipiscing nec, purus.
    </v-alert>
    <v-alert text dense color="teal" icon="mdi-clock-fast" border="left">
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum
      facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae
      euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis.
    </v-alert>
    <v-alert text prominent type="error" icon="mdi-cloud-alert">
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus
      tempus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut,
      ligula. Duis leo.
    </v-alert>

    <h1>トランジション</h1>
    <div class="text-center mb-4">
      <v-btn color="primary" @click="alert = !alert">
        Toggle
      </v-btn>
    </div>
    <v-alert
      :value="alert"
      color="pink"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
      Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In
      dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque
      posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
      imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis.
      Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac,
      leo. In hac habitasse platea dictumst. Praesent turpis.
    </v-alert>

    <h1>Twitter alert</h1>
    <v-alert
      v-model="alert"
      dismissible
      color="cyan"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-twitter"
    >
      You've got <strong>5</strong> new updates on your timeline!.
    </v-alert>

    <div class="text-center">
      <v-btn v-if="!alert" dark @click="alert = true">
        Reset Alert
      </v-btn>
    </div>

    <h1>props確認</h1>
    <v-alert color="success" dismissible dark dense tile @input="test">
      <slot name="append">aaaa</slot>
      <slot name="close">bbbb</slot>
      <slot name="prepend">cccc</slot>
      <v-btn @click="test2">aaa</v-btn>
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: true
    };
  },
  methods: {
    test: function(value) {
      console.log(value);
    },
    test2: function() {
      console.log("aaa");
    }
  }
};
</script>
