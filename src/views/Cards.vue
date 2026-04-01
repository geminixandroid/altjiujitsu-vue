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

<script setup>
import { ref, toRef } from 'vue'
import { usePageData } from '@/composables/usePageData'

const props = defineProps({ category: { type: String, required: true } })

const title = ref('')
const cards = ref([])
const isMenuShow = ref(false)
const menuTitle = ref('')
const menuRegals = ref([])

usePageData(toRef(props, 'category'), (data) => {
  title.value = data.title
  cards.value = data.data
})

function showMenu(cardTitle, regals) {
  if (regals) {
    isMenuShow.value = true
    menuTitle.value = cardTitle
    menuRegals.value = regals
  }
}
</script>

<style scoped></style>
