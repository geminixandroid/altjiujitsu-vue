<template>
  <v-main class="text-center">
    <h2>{{ title }}</h2>
    {{ address }}
    <v-row
      v-for="(day, index) in days"
      class="mt-2"
      :key="day.day"
      align="center"
      :class="`${index % 2 === 0 ? 'primary darken-1' : 'primary lighten-1'}`"
      justify="center"
    >
      <v-col cols="9" md="3">{{ day.day }}</v-col>
      <v-col cols="12" md="6">
        <v-row
          align="center"
          :class="`${index % 2 === 0 ? 'grey lighten-3' : 'grey lighten-2'}`"
          justify="center"
          :key="item.time"
          v-for="(item, index) in day.rasp"
        >
          <v-col>{{ item.time }} </v-col> <v-col>{{ item.trener }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "Raspisanie",
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    title: "",
    address: "",
    days: [],
  }),
  metaInfo() {
    return {
      title: this.title,
    };
  },
  watch: {
    category: function (newVal) {
      // watch it
      this.load(newVal);
    },
  },
  created() {
    //console.log(this.category);
    this.load(this.category);
  },
  methods: {
    load(category) {
      axios
        .get(`/data/${category.replace(".html", "")}.json`)
        .then((response) => {
          //console.log(response.data)
          this.title = response.data.title;
          this.days = response.data.data;
          this.address = response.data.address;
        })
        .finally(() => {
          this.$nextTick(() => {
            document.dispatchEvent(new Event("x-app-rendered"));
          });
        });
    },
  },
};
</script>

<style scoped></style>
