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

<script setup>
import { ref, toRef } from 'vue'
import { usePageData } from '@/composables/usePageData'

const props = defineProps({ category: { type: String, required: true } })

const title = ref('')
const items = ref([])

usePageData(toRef(props, 'category'), (data) => {
  title.value = data.title
  items.value = data.data
})
</script>

<style scoped></style>
