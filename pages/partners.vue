<template>
  <v-main class="text-center">
    <h2>{{ title }}</h2>
    <v-card width="400px" flat class="mx-auto">
      <v-list>
        <v-list-item
          class="mb-2 mt-2"
          :class="`${index % 2 === 0 ? 'grey lighten-3' : 'grey lighten-2'}`"
          v-for="(partner, index) in partners"
          :key="partner.title"
        >
          <v-avatar color="primary">
            <v-img :src="partner.src" contain></v-img>
          </v-avatar>

          <div class="text-center">{{ partner.title }}</div>
          <div>
            <a target="_blank" :href="partner.link">{{ partner.link }}</a>
          </div>
          <v-divider class="mt-2"></v-divider>
        </v-list-item>
      </v-list>
    </v-card>
  </v-main>
</template>
<script setup lang="ts">
import { IPageData } from '@/viewModels/iPageData'
const route = useRoute()
console.warn(route.params.category)
const pageData: IPageData = await $fetch(
  `/data/partners.json?timestamp=${Date.now()}`,
)
const partners = pageData.data
const title = pageData.title
</script>
