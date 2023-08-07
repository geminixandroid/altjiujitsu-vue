<template>
  <v-list nav dense>
    <v-list-item to="/"><v-icon left>mdi-home</v-icon>Главная</v-list-item>
    <v-list-item to="/calendar"
      ><v-icon left>mdi-calendar-check</v-icon>Мероприятия</v-list-item
    >
    <v-list-item to="/treners" nuxt
      ><v-icon left>mdi-human-greeting</v-icon>Наши тренеры</v-list-item
    >
    <v-list-item to="/gordost" nuxt
      ><v-icon left>mdi-human-handsup</v-icon>Гордость федерации</v-list-item
    >
    <v-list-item to="/partners" nuxt
      ><v-icon left>mdi-handshake</v-icon>Партнеры федерации</v-list-item
    >
    <v-list-item to="/antidoping" nuxt
      ><v-icon left>mdi-pill</v-icon>Антидопинг</v-list-item
    >
    <v-divider></v-divider>
    <v-list-item>
      <v-expansion-panels flat accordion>
        <v-expansion-panel>
          <v-expansion-panel-title>Расписание</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list-item
              to="/raspisanie-shor"
              nuxt
              title="СШОР-3"
              subtitle="г.Барнаул"
            ></v-list-item>
            <v-list-item
              to="/raspisanie-posp"
              nuxt
              title="ПОСПЕЛИХИНСКАЯ ДЮСШ"
              subtitle="с.Поспелиха"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie-piton"
              nuxt
              title="СК Питон"
              subtitle="г.Барнаул"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie-singitay"
              nuxt
              title="Сингитай"
              subtitle="г.Барнаул"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie-partizan"
              nuxt
              title="СПК ПАРТИЗАН"
              subtitle="г.Барнаул"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie-ber"
              nuxt
              title="СК Пересвет"
              subtitle="с.Березовка"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie-cher"
              nuxt
              title="СК Алан"
              subtitle="с.Черемное"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie-ferr"
              nuxt
              title="СК FERRUM"
              subtitle="с.Бобровка"
            >
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Ведущие спортсмены</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list-item
              to="/cards/vedushie21"
              nuxt
              title="до 21 года"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie18"
              nuxt
              title="до 18 лет"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie16"
              nuxt
              title="до 16 лет"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie14"
              nuxt
              title="до 14 лет"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie12"
              nuxt
              title="до 12 лет"
            ></v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Судейство</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list-item
              to="/cards/kollegia"
              nuxt
              title="Коллегия судей"
            ></v-list-item>
            <v-list-item
              to="/rules/rules"
              nuxt
              title="Правила соревнований"
            ></v-list-item>
            <v-list-item title="ЕВСК"></v-list-item>
            <v-list-item title="Новости"></v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Федерация</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list-item
              to="/cards/rukovodstvo"
              nuxt
              title="Руководство"
            ></v-list-item>
            <v-list-item title="История"></v-list-item>
            <v-divider></v-divider>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>
