<template>
  <v-main class="text-center">
    <h2>{{ title }}</h2>
    <div class="pa-2">
      <FullCalendar :options="calendarOptions" />
    </div>
    <v-dialog v-model="showInfo" max-width="500px">
      <v-card class="mx-auto">
        <v-card-title class="primary mb-2">
          <v-row>
            <v-col style="word-break: normal">{{ event.title }}</v-col>
            <v-col cols="auto">
              <v-btn icon @click="showInfo = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
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
          <v-btn text @click="showInfo = false"
            ><v-icon left>mdi-close</v-icon>закрыть</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import axios from 'axios'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: 'Raspisanie',
  components: {
    FullCalendar,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    calendarOptions() {
      return {
        eventClick: this.eventClickInfo,
        events: this.events,
        firstDay: 1,
        headerToolbar: {
          start: 'title',
          center: '',
          end: 'today,prev,next',
        },
        titleFormat: { year: 'numeric', month: 'long' },
        height: 'auto',
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        locale: 'ru',
        buttonText: { today: 'Сегодня' },
      }
    },
  },
  data: () => ({
    dialog: false,
    title: '',
    address: '',
    events: [],
    showInfo: false,
    event: { title: '', extendedProps: {}, start: '', end: '' },
  }),
  metaInfo() {
    return {
      title: this.title,
    }
  },
  watch: {
    category: function (newVal) {
      this.load(newVal)
    },
  },
  created() {
    this.load(this.category)
  },
  methods: {
    getDateStart(date) {
      if (date) return new Date(date).toLocaleDateString()
      return ''
    },
    getDateEnd(date) {
      if (date) {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() - 1)
        return `- ${newDate.toLocaleDateString()}`
      }
      return ''
    },
    eventClickInfo(info) {
      this.event = info.event
      this.showInfo = true
    },
    load(category) {
      axios
        .get(
          `/data/${category.replace('.html', '')}.json?timestamp=${Date.now()}`,
        )
        .then((response) => {
          this.title = response.data.title
          this.events = response.data.events
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
