<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <Navigation></Navigation>
    </v-navigation-drawer>
    <v-app-bar app color="primary" scroll-behavior="hide">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="mr-2"
        :src="'/img/logo.svg'"
        width="32"
        height="32"
        max-width="32"
        max-height="32"
        contain
      />
      <v-toolbar-title v-if="$vuetify.display.xs"> АКФД</v-toolbar-title>
      <v-toolbar-title class="text-uppercase" v-else>
        Алтайская Краевая Федерация Джиу-Джитсу</v-toolbar-title
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

    <v-main style="background-color: #fafafa">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <v-spacer></v-spacer
      ><v-btn variant="text" class="text-overline" href="mailto:geminixandroid@gmail.com"
        >разработан: geminixandroid@gmail.com<v-icon size="small" end
          >mdi-email-outline</v-icon
        ></v-btn
      >
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation,
  },
  data: () => ({
    drawer: false,
  }),
  created() {
    this.$setTitle(null)
  },
}
</script>

<style>
.v-toolbar__content .v-toolbar-title {
  flex: 1 1 0 !important;
  min-width: 0;
}
</style>
