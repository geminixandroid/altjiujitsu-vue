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

<script setup>
import { ref, toRef } from 'vue'
import { usePageData } from '@/composables/usePageData'

const props = defineProps({ category: { type: String, required: true } })

const title = ref('')
const partners = ref([])

usePageData(toRef(props, 'category'), (data) => {
  title.value = data.title
  partners.value = data.data
})
</script>

<style scoped></style>
