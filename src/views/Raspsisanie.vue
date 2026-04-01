<template>
  <div class="text-center">
    <h2>{{ title }}</h2>
    {{ address }}
    <v-row
      v-for="(day, index) in days"
      class="mt-0"
      :key="day.day"
      :class="`${index % 2 === 0 ? 'bg-primary-darken-1' : 'bg-primary-lighten-1'}`"
      justify="center"
    >
      <v-col cols="9" md="3" class="text-black d-flex align-center justify-center">{{ day.day }}</v-col>
      <v-col cols="12" md="6">
        <v-row
          :class="`${itemIndex % 2 === 0 ? 'bg-grey-lighten-3' : 'bg-grey-lighten-2'}`"
          class="py-2"
          justify="center"
          no-gutters
          :key="item.time"
          v-for="(item, itemIndex) in day.rasp"
        >
          <v-col>{{ item.time }} </v-col> <v-col>{{ item.trener }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Raspisanie',
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    title: '',
    address: '',
    days: [],
  }),
  watch: {
    category: function (newVal) {
      this.load(newVal)
    },
  },
  created() {
    this.load(this.category)
  },
  methods: {
    load(category) {
      axios
        .get(`/data/${category.replace('.html', '')}.json`)
        .then((response) => {
          this.title = response.data.title
          this.days = response.data.data
          this.address = response.data.address
          this.$setTitle(response.data.title)
        })
        .finally(() => {
          this.$nextTick(() => {
            document.dispatchEvent(new Event('x-app-rendered'))
          })
        })
    },
  },
}
</script>

<style scoped></style>
