<template>
  <v-app >
    <v-navigation-drawer
            v-model="drawer"
            app
            width="300px"

            temporary
    ><Navigation></Navigation>
      </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      hide-on-scroll
    >

        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-img class="mr-2"
              src="/img/logo.svg"
              width="32"
              height="32"
              max-width="32"
              max-height="32"
              contain
      />
      <v-toolbar-title v-if="$vuetify.breakpoint.xsOnly" >
       АКФД</v-toolbar-title>
      <v-toolbar-title class="text-uppercase" v-else>
         Алтайская Краевая Федерация Джиу-Джитсу</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
              href="https://instagram.com/altai_jiu_jitsu_federation"
              target="_blank"
              icon
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn
              href="https://vk.com/altayjiujitsu"
              target="_blank"
              icon
      ><v-icon >mdi-vk</v-icon>
      </v-btn>
      <v-btn
              href="https://ok.ru/altjiujitsu"
              target="_blank"
              icon
      ><v-icon>mdi-odnoklassniki</v-icon>
      </v-btn>
      <v-btn
              href="mailto:altai.jiujitsu@gmail.com"
              icon
      ><v-icon>mdi-gmail</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container fluid style="background-color: #fafafa;">
      <router-view></router-view>
    </v-container>
    <v-footer app >
      <v-spacer></v-spacer><v-btn text  class="overline" href="mailto:geminixandroid@gmail.com">разработан: geminixandroid@gmail.com<v-icon small right>mdi-email-outline</v-icon></v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";


export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'АКФД',
    // all titles will be injected into this template
    titleTemplate: '%s | Алтайская Краевая Федерация Джиу-Джитсу'
  },
  components: {
    Navigation  },
  data: () => ({
    drawer:false
    //
  }),
};
</script>
