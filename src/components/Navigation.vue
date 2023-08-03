<template>
  <v-list nav dense>
    <v-list-item to="/"><v-icon left>mdi-home</v-icon>Главная</v-list-item>
    <!--<v-list-item><v-icon left>mdi-newspaper</v-icon>Новости</v-list-item>-->
    <v-list-item to="/calendar/calendar.html"
      ><v-icon left>mdi-calendar-check</v-icon>Мероприятия</v-list-item
    >
    <v-list-item to="/cards/treners.html"
      ><v-icon left>mdi-human-greeting</v-icon>Наши тренеры</v-list-item
    >
    <v-list-item to="/cards/gordost.html"
      ><v-icon left>mdi-human-handsup</v-icon>Гордость федерации</v-list-item
    >
    <v-list-item to="/partners/partners.html"
      ><v-icon left>mdi-handshake</v-icon>Партнеры федерации</v-list-item
    >
    <v-list-item to="/antidoping/antidoping.html"
      ><v-icon left>mdi-pill</v-icon>Антидопинг</v-list-item
    >
    <v-divider></v-divider>
    <v-list-item>
      <v-expansion-panels flat accordion>
        <v-expansion-panel>
          <v-expansion-panel-title>Расписание</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list-item
              to="/raspisanie/raspisanieSHOR.html"
              title="СШОР-3"
              subtitle="г.Барнаул"
            ></v-list-item>
            <v-list-item
              to="/raspisanie/raspisaniePOSP.html"
              title="ПОСПЕЛИХИНСКАЯ ДЮСШ"
              subtitle="с.Поспелиха"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie/raspisaniePITON.html"
              title="СК Питон"
              subtitle="г.Барнаул"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie/raspisanieSINGITAY.html"
              title="Сингитай"
              subtitle="г.Барнаул"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie/raspisaniePARTIZAN.html"
              title="СПК ПАРТИЗАН"
              subtitle="г.Барнаул"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie/raspisanieBER.html"
              title="СК Пересвет"
              subtitle="с.Березовка"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie/raspisanieCHER.html"
              title="СК Алан"
              subtitle="с.Черемное"
            >
            </v-list-item>
            <v-list-item
              to="/raspisanie/raspisanieFERR.html"
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
              to="/cards/vedushie21.html"
              title="до 21 года"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie18.html"
              title="до 18 лет"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie16.html"
              title="до 16 лет"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie14.html"
              title="до 14 лет"
            ></v-list-item>
            <v-list-item
              to="/cards/vedushie12.html"
              title="до 12 лет"
            ></v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Судейство</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list-item
              to="/cards/kollegia.html"
              title="Коллегия судей"
            ></v-list-item>
            <v-list-item
              to="/rules/rules.html"
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
              to="/cards/rukovodstvo.html"
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
