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

<script>
import axios from 'axios'

export default {
  name: 'Rules',
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    title: '',
    pdfs: [],
    tabSwitcher: 0,
    tabs: [],
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
          this.pdfs = response.data.pdfs
          this.tabs = response.data.tabs
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
