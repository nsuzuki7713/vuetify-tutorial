https://vuetifyjs.com/ja/styles/flex/#flex
<template>
  <div>
    <h3>Flexboxの有効化</h3>
    <v-card class="d-flex pa-2  mb-6" outlined tile>
      <div>I'm a flexbox container!</div>
    </v-card>

    <v-card class="d-inline-flex pa-2  mb-6" outlined tile>
      <div>I'm an inline flexbox container!</div>
    </v-card>

    <h3>Flex direction （アイテムの方向と向き）</h3>
    <v-card class="d-flex flex-row mb-6" color="grey lighten-2" flat tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item {{ n }}
      </v-card>
    </v-card>
    <v-card
      class="d-flex flex-row-reverse mb-6"
      color="grey lighten-2"
      flat
      tile
    >
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item {{ n }}
      </v-card>
    </v-card>

    <div class="d-flex flex-column mb-6">
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item {{ n }}
      </v-card>
    </div>
    <div class="d-flex flex-column-reverse">
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item {{ n }}
      </v-card>
    </div>

    <h3>Flex justify （均等割り付け）</h3>
    <v-card
      v-for="j in justify"
      :key="j"
      :class="`d-flex justify-${j} mb-6`"
      color="grey lighten-2"
      flat
      tile
    >
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <h3>Flex align （位置）</h3>
    <v-card
      v-for="a in align"
      :key="a"
      :class="`d-flex align-${a} mb-6`"
      color="grey lighten-2"
      flat
      height="100"
      tile
    >
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <h3>Flex align self</h3>
    <v-card
      v-for="j in justify"
      :key="j"
      class="d-flex mb-6"
      color="grey lighten-2"
      flat
      height="100"
      tile
    >
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        :class="[n === 2 && `align-self-${j}`]"
        outlined
        tile
      >
        {{ n === 2 ? "Aligned flex item" : "Flex item" }}
      </v-card>
    </v-card>

    <h3>Auto margins</h3>
    <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
      <v-card
        v-for="n in 3"
        :key="n"
        :class="n === 1 && 'mr-auto'"
        class="pa-2"
        outlined
        tile
      >
        Flex item
      </v-card>
    </v-card>

    <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
      <v-card
        v-for="n in 3"
        :key="n"
        :class="n === 3 && 'ml-auto'"
        class="pa-2"
        outlined
        tile
      >
        Flex item
      </v-card>
    </v-card>

    <h4>Using align-items</h4>
    <v-card
      class="d-flex align-start flex-column mb-6"
      color="grey lighten-2"
      flat
      tile
      height="200"
    >
      <v-card
        v-for="n in 3"
        :key="n"
        :class="n === 1 && 'mb-auto'"
        class="pa-2"
        outlined
        tile
      >
        Flex item
      </v-card>
    </v-card>
    <v-card
      class="d-flex align-end flex-column"
      color="grey lighten-2"
      flat
      tile
      height="200"
    >
      <v-card
        v-for="n in 3"
        :key="n"
        :class="n === 3 && 'mt-auto'"
        class="pa-2"
        outlined
        tile
      >
        Flex item
      </v-card>
    </v-card>

    <h3>Flex wrap</h3>
    <v-card
      class="d-flex flex-nowrap py-3"
      color="grey lighten-2"
      flat
      tile
      width="125"
    >
      <v-card v-for="n in 5" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <v-card class="d-flex flex-wrap mb-4" color="grey lighten-2" flat tile>
      <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <v-card class="d-flex flex-wrap-reverse" color="grey lighten-2" flat tile>
      <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <h3>Flexの順序</h3>
    <v-card class="d-flex" color="grey lighten-2" flat tile>
      <v-card class="order-3 pa-2" outlined tile>
        First flex item
      </v-card>
      <v-card class="order-2 pa-2" outlined tile>
        Second flex item
      </v-card>
      <v-card class="order-1 pa-2" outlined tile>
        Third flex item
      </v-card>
    </v-card>

    <h3>Flex align content</h3>
    <v-card
      class="d-flex align-content-start flex-wrap mb-4"
      color="grey lighten-2"
      flat
      tile
      min-height="200"
    >
      <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <v-card
      class="d-flex align-content-end flex-wrap mb-4"
      color="grey lighten-2"
      flat
      tile
      min-height="200"
    >
      <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <v-card
      class="d-flex align-content-center flex-wrap mb-4"
      color="grey lighten-2"
      flat
      tile
      min-height="200"
    >
      <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <v-card
      class="d-flex align-content-space-between flex-wrap mb-4"
      color="grey lighten-2"
      flat
      tile
      min-height="200"
    >
      <v-card v-for="n in 20" :key="n" class="pa-2 mb-4" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <v-card
      class="d-flex align-content-space-around flex-wrap mb-4"
      color="grey lighten-2"
      flat
      tile
      min-height="200"
    >
      <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </v-card>

    <h3>Flex grow and shrink</h3>
    <v-container class="grey lighten-5">
      <v-row no-gutters style="flex-wrap: nowrap;">
        <v-col cols="2" class="flex-grow-0 flex-shrink-0">
          <v-card class="pa-2" outlined tile>
            I'm 2 column wide
          </v-card>
        </v-col>
        <v-col
          cols="1"
          style="min-width: 100px; max-width: 100%;"
          class="flex-grow-1 flex-shrink-0"
        >
          <v-card class="pa-2" outlined tile>
            I'm 1 column wide and I grow to take all the space
          </v-card>
        </v-col>
        <v-col
          cols="5"
          style="min-width: 100px;"
          class="flex-grow-0 flex-shrink-1"
        >
          <v-card class="pa-2" outlined tile>
            I'm 5 column wide and I shrink if there's not enough space
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    justify: ["start", "end", "center", "space-between", "space-around"],
    align: ["start", "end", "center", "baseline", "stretch"]
  })
};
</script>
Flex item
