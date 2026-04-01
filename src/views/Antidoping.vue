<template>
  <div class="text-center">
    <h2>{{ title }}</h2>
    <v-card flat max-width="600px" class="mx-auto">
      <v-list>
        <v-list-item
          class="mb-2 mt-2 text-left"
          v-for="pdf in items"
          :key="pdf.title"
          :to="pdf.link"
          target="_blank"
        >
          <template v-slot:prepend>
            <v-icon>mdi-file</v-icon>
          </template>
          <v-list-item-title>{{ pdf.title }}.pdf</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Antidoping',
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    title: '',
    items: [],
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
          this.items = response.data.data
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
