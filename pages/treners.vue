<template>
  <v-main class="text-center">
    <cards-list :cards="data" :title="title"></cards-list>
  </v-main>
</template>
<script setup lang="ts">
import { IPageData } from '@/viewModels/iPageData'

const { data, title }: IPageData = await $fetch(
  `/data/treners.json?timestamp=${Date.now()}`,
)
</script>
