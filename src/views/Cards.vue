<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
    <v-dialog v-model="isMenuShow" max-width="800px">
      <v-card class="mx-auto">
        <v-card-title class="bg-primary mb-2 d-flex align-center"
          >{{ menuTitle }}<v-spacer></v-spacer
          ><v-icon style="cursor:pointer" @click="isMenuShow = false">mdi-close</v-icon>
        </v-card-title>
        <v-card-text>
          <div v-for="(regal, index) in menuRegals" :key="index">
            &#8226; {{ regal }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="text" @click="isMenuShow = false"
            ><v-icon start>mdi-close</v-icon>закрыть</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center">
      <v-col
        cols="12"
        md="3"
        sm="6"
        v-for="card in cards"
        :key="card.title + title"
      >
        <v-card width="300px" min-height="250px" class="ma-auto d-flex flex-column">
          <div class="d-none">
            <div v-for="regal in card.regals" :key="regal">&#8226; {{ regal }}</div>
          </div>
          <div class="text-center pa-3 flex-grow-1">
            <div class="text-subtitle-2 text-truncate mb-1">{{ card.title }}</div>
            <v-img
              :src="card.src"
              lazy-src="/img/lazy.png"
              height="200"
              width="200"
              class="mx-auto"
              contain
              @click="showMenu(card.title, card.regals)"
            />
            <v-tooltip v-if="card.subtitle" :text="card.subtitle" location="bottom">
              <template v-slot:activator="{ props }">
                <div v-bind="props" class="mt-1 text-caption text-truncate">
                  {{ card.subtitle }}
                </div>
              </template>
            </v-tooltip>
          </div>
          <v-card-actions>
            <v-btn
              v-if="card.phone"
              :href="`tel:${card.phone}`"
              color="primary"
              variant="elevated"
              class="text-black"
            >
              <v-icon start>mdi-phone</v-icon>
              позвонить
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon v-if="card.regals"
              ><v-icon @click="showMenu(card.title, card.regals)"
                >mdi-dots-vertical</v-icon
              ></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cards',
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    title: '',
    cards: [],
    isMenuShow: false,
    menuTitle: '',
    menuRegals: [],
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
          this.cards = response.data.data
          this.$setTitle(response.data.title)
        })
        .finally(() => {
          this.$nextTick(() => {
            document.dispatchEvent(new Event('x-app-rendered'))
          })
        })
    },
    showMenu(title, regals) {
      if (regals) {
        this.isMenuShow = true
        this.menuTitle = title
        this.menuRegals = regals
      }
    },
  },
}
</script>

<style scoped></style>
