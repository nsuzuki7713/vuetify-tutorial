<template>
  <div>
    <v-simple-table style="width:1000px; margin:0 auto">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">マスタ</th>
            <th class="text-left">
              <v-checkbox label="プラン1" v-model="checkFlag[0]" />
            </th>
            <th class="text-left">
              <v-checkbox label="プラン2" v-model="checkFlag[1]" />
            </th>
            <th class="text-left">
              <v-checkbox label="プラン3" v-model="checkFlag[2]" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in columMaster" :key="item.name">
            <td>{{item.name}}</td>
            <td>
              <v-select
                v-model="plans[0][item.code]"
                :items="item.values"
                label="入力値"
                solo
                dense
                :disabled="checkFlag[0]"
              ></v-select>
            </td>
            <td>
              <v-select
                v-model="plans[1][item.code]"
                :items="item.values"
                label="入力値"
                solo
                dense
                :disabled="checkFlag[1]"
              ></v-select>
            </td>
            <td>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
              <!-- <v-select
                v-model="plans[2][item.code]"
                :items="item.values"
                label="入力値"
                solo
                dense
                :disabled="checkFlag[2]"
              ></v-select>-->
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div>{{checkFlag}}</div>
    <div>{{plans}}</div>
    <v-btn small color="primary" @click="onClick()">登録</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkFlag: [false, false, false],
    plans: [
      {
        id1: "",
        id2: "2-1",
        id3: ""
      },
      {
        id1: "",
        id2: "",
        id3: ""
      },
      {
        id1: "",
        id2: "",
        id3: ""
      }
    ],
    columMaster: [
      {
        name: "保険1",
        select: {
          key1: "value1",
          key2: "value2",
          key3: "value3"
        },
        code: "id1",
        values: [
          {
            text: "1の1",
            value: "1-1"
          },
          {
            text: "1-2",
            value: "1-2"
          },
          {
            text: "1-3",
            value: "1-3"
          }
        ]
      },
      {
        name: "保険2",
        select: {
          key1: "value1",
          key2: "value2",
          key3: "value3"
        },
        code: "id2",
        values: [
          {
            text: "2-1",
            value: "2-1"
          },
          {
            text: "2-2",
            value: "2-2"
          },
          {
            text: "2-3",
            value: "2-3"
          }
        ]
      },
      {
        name: "保険3",
        select: {
          key1: "value1",
          key2: "value2",
          key3: "value3"
        },
        code: "id3",
        values: [
          {
            text: "3-1",
            value: "3-1"
          },
          {
            text: "3-2",
            value: "3-2"
          },
          {
            text: "3-3",
            value: "3-3"
          }
        ]
      },
      {
        name: "保険4",
        select: {
          key1: "value1",
          key2: "value2",
          key3: "value3"
        },
        code: "id4",
        values: [
          {
            text: "4-1",
            value: "4-1"
          },
          {
            text: "4-2",
            value: "4-2"
          },
          {
            text: "4-3",
            value: "4-3"
          }
        ]
      }
    ]
  }),
  methods: {
    onClick: function() {
      console.log(this.model);
    }
  }
};
</script>

<style scoped>
>>> .v-text-field__details {
  display: none;
}
</style>
