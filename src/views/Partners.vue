<template>
  <div class="text-center">
    <h2>{{ title }}</h2>
    <v-card max-width="400px" flat class="mx-auto">
      <v-list>
        <v-list-item
          class="mb-2 mt-2"
          :class="`${index % 2 === 0 ? 'bg-grey-lighten-3' : 'bg-grey-lighten-2'}`"
          v-for="(partner, index) in partners"
          :key="partner.title"
        >
          <template v-slot:prepend>
            <v-avatar color="primary">
              <v-img :src="partner.src" contain></v-img>
            </v-avatar>
          </template>
          <div class="text-center">
            <div>{{ partner.title }}</div>
            <div>
              <a target="_blank" :href="partner.link">{{ partner.link }}</a>
            </div>
            <v-divider class="mt-2"></v-divider>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Partners',
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    title: '',
    partners: [],
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
        .get(
          `/data/${category.replace('.html', '')}.json?timestamp=${Date.now()}`,
        )
        .then((response) => {
          this.title = response.data.title
          this.partners = response.data.data
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
