<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" width="300"
      ><navigation></navigation>
    </v-navigation-drawer>
    <v-app-bar color="primary" scroll-behavior="hide">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="mr-2"
        src="/img/logo.svg"
        width="32"
        height="32"
        max-width="32"
        max-height="32"
        contain
      />
      <v-toolbar-title v-if="$vuetify.display.smAndDown">АКФД</v-toolbar-title>
      <v-toolbar-title class="text-uppercase" v-else
        >Алтайская Краевая Федерация Джиу-Джитсу</v-toolbar-title
      >
      <v-btn
        href="https://instagram.com/altai_jiu_jitsu_federation"
        target="_blank"
        icon
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn href="https://vk.com/altayjiujitsu" target="_blank" icon
        ><v-icon>mdi-vk</v-icon>
      </v-btn>
      <v-btn href="https://ok.ru/altjiujitsu" target="_blank" icon
        ><v-icon>mdi-odnoklassniki</v-icon>
      </v-btn>
      <v-btn href="mailto:altai.jiujitsu@gmail.com" icon
        ><v-icon>mdi-gmail</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container fluid style="background-color: #fafafa">
      <router-view></router-view>
    </v-container>
    <v-footer app>
      <v-spacer></v-spacer
      ><v-btn size="small" text flat href="mailto:geminixandroid@gmail.com"
        >разработан: geminixandroid@gmail.com</v-btn
      >
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'АКФД',
  titleTemplate: '%s | Алтайская Краевая Федерация Джиу-Джитсу',
})

const drawer = ref(false)
</script>
