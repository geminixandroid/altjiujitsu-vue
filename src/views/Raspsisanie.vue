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

<script setup>
import { ref, toRef } from 'vue'
import { usePageData } from '@/composables/usePageData'

const props = defineProps({ category: { type: String, required: true } })

const title = ref('')
const address = ref('')
const days = ref([])

usePageData(toRef(props, 'category'), (data) => {
  title.value = data.title
  days.value = data.data
  address.value = data.address
})
</script>

<style scoped></style>
