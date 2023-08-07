<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4" sm="6" v-for="(card, i) in cards" :key="i">
        <v-card>
          <v-img
            :src="card.src"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.2)"
            lazy-src="/img/lazy.png"
            height="200"
          ></v-img>
          <div class="text-subtitle-1">{{ card.title }}</div>
          <div class="text-subtitle-1">{{ card.subtitle }}</div>
          <v-card-actions>
            <v-btn
              v-if="card.phone"
              :href="`tel:${card.phone}`"
              prepend-icon="mdi-phone"
              >позвонить</v-btn
            >
            <v-spacer></v-spacer>
            <v-tooltip>
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" v-if="card.text"
                  >mdi-dots-vertical</v-icon
                >
              </template>
              <div style="max-width: 200px">
                {{ card.text }}
              </div>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { IPageItemData } from '@/viewModels/iPageItemData'

defineProps({
  cards: {
    type: Array<IPageItemData>,
    default: [],
  },
  title: {
    type: String,
    default: '',
  },
})
</script>
