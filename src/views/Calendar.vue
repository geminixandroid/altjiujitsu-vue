<template>
  <div class="text-center">
    <h2>{{ title }}</h2>
    <div class="pa-2">
      <FullCalendar :options="calendarOptions" />
    </div>
    <v-dialog v-model="showInfo" max-width="500px">
      <v-card class="mx-auto">
        <v-card-title class="bg-primary mb-2 d-flex align-center">
          <v-row>
            <v-col style="word-break: normal">{{ event.title }}</v-col>
            <v-col cols="auto">
              <v-icon style="cursor:pointer" @click="showInfo = false">mdi-close</v-icon>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          {{ getDateStart(event.start) }}
          {{ getDateEnd(event.end) }}
          <br />
          {{ event.extendedProps.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn variant="text" @click="showInfo = false"
            ><v-icon start>mdi-close</v-icon>закрыть</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed, toRef } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { usePageData } from '@/composables/usePageData'

const props = defineProps({ category: { type: String, required: true } })

const title = ref('')
const events = ref([])
const showInfo = ref(false)
const event = ref({ title: '', extendedProps: {}, start: '', end: '' })

usePageData(toRef(props, 'category'), (data) => {
  title.value = data.title
  events.value = data.events
})

const calendarOptions = computed(() => ({
  eventClick: (info) => {
    event.value = info.event
    showInfo.value = true
  },
  events: events.value,
  firstDay: 1,
  headerToolbar: { start: 'title', center: '', end: 'today,prev,next' },
  titleFormat: { year: 'numeric', month: 'long' },
  height: 'auto',
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: 'ru',
  buttonText: { today: 'Сегодня' },
}))

function getDateStart(date) {
  if (date) return new Date(date).toLocaleDateString()
  return ''
}

function getDateEnd(date) {
  if (date) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() - 1)
    return `- ${newDate.toLocaleDateString()}`
  }
  return ''
}
</script>
<style>
.fc-button {
  display: flex !important;
}
.fc-toolbar-title {
  font-size: 1em !important;
}
.fc-icon {
  display: flex !important;
}
</style>
