<template>
  <div class="text-center">
    <h2>{{ title }}</h2>
    <div class="d-none">
      <div v-for="tab in tabs" :key="tab.tabname">
        <div v-for="content in tab.tabcontent" :key="content.title">
          {{ content.title }} {{ content.link }}
        </div>
      </div>
    </div>
    <v-list width="400px" class="mx-auto bg-transparent">
      <v-list-item class="mb-2 mt-2 bg-transparent" v-for="pdf in pdfs" :key="pdf.title">
        <div class="text-center">
          <v-btn width="400px" variant="outlined" :href="pdf.link" target="_blank"
            >{{ pdf.title }}
            <v-icon end>mdi-download</v-icon>
          </v-btn>
        </div>
      </v-list-item>
    </v-list>
    <v-tabs v-model="tabSwitcher" bg-color="primary">
      <v-tab v-for="tab in tabs" :key="tab.tabname">
        {{ tab.tabname }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tabSwitcher">
      <v-window-item v-for="tab in tabs" :key="tab.tabname">
        <v-row justify="center" class="pa-2">
          <v-col
            cols="12"
            md="3"
            sm="6"
            v-for="rule in tab.tabcontent"
            :key="rule.title"
          >
            <v-card elevation="2" max-width="400px" class="ma-auto">
              <v-card-title>{{ rule.title }}</v-card-title>
              <v-card-subtitle class="text-left">{{
                rule.subtitle
              }}</v-card-subtitle>
              <v-card-text>
                <video controls :src="rule.link" style="width:100%;display:block;"></video>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref, toRef } from 'vue'
import { usePageData } from '@/composables/usePageData'

const props = defineProps({ category: { type: String, required: true } })

const title = ref('')
const pdfs = ref([])
const tabs = ref([])
const tabSwitcher = ref(0)

usePageData(toRef(props, 'category'), (data) => {
  title.value = data.title
  pdfs.value = data.pdfs
  tabs.value = data.tabs
})
</script>

<style scoped></style>
