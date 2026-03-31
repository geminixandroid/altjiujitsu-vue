<template>
  <v-list nav density="compact">
    <v-list-item prepend-icon="mdi-home" to="/" title="Главная" />
    <v-list-item prepend-icon="mdi-calendar-check" to="/calendar/calendar.html" title="Мероприятия" />
    <v-list-item prepend-icon="mdi-human-greeting" to="/cards/treners.html" title="Наши тренеры" />
    <v-list-item prepend-icon="mdi-human-handsup" to="/cards/gordost.html" title="Гордость федерации" />
    <v-list-item prepend-icon="mdi-handshake" to="/partners/partners.html" title="Партнеры федерации" />
    <v-list-item prepend-icon="mdi-pill" to="/antidoping/antidoping.html" title="Антидопинг" />
    <v-divider class="my-2"></v-divider>
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-title>Расписание</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list nav density="compact">
            <v-list-item to="/raspisanie/raspisanieSHOR.html" title="СШОР-3" subtitle="г.Барнаул" />
            <v-list-item to="/raspisanie/raspisaniePOSP.html" title="ПОСПЕЛИХИНСКАЯ ДЮСШ" subtitle="с.Поспелиха" />
            <v-list-item to="/raspisanie/raspisaniePITON.html" title="СК Питон" subtitle="г.Барнаул" />
            <v-list-item to="/raspisanie/raspisanieSINGITAY.html" title="Сингитай" subtitle="г.Барнаул" />
            <v-list-item to="/raspisanie/raspisaniePARTIZAN.html" title="СПК ПАРТИЗАН" subtitle="г.Барнаул" />
            <v-list-item to="/raspisanie/raspisanieBER.html" title="СК Пересвет" subtitle="с.Березовка" />
            <v-list-item to="/raspisanie/raspisanieCHER.html" title="СК Алан" subtitle="с.Черемное" />
            <v-list-item to="/raspisanie/raspisanieFERR.html" title="СК FERRUM" subtitle="с.Бобровка" />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Ведущие спортсмены</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list nav density="compact">
            <v-list-item to="/cards/vedushie21.html" title="до 21 года" />
            <v-list-item to="/cards/vedushie18.html" title="до 18 лет" />
            <v-list-item to="/cards/vedushie16.html" title="до 16 лет" />
            <v-list-item to="/cards/vedushie14.html" title="до 14 лет" />
            <v-list-item to="/cards/vedushie12.html" title="до 12 лет" />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Судейство</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list nav density="compact">
            <v-list-item to="/cards/kollegia.html" title="Коллегия судей" />
            <v-list-item to="/rules/rules.html" title="Правила соревнований" />
            <v-list-item title="ЕВСК" />
            <v-list-item title="Новости" />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Федерация</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list nav density="compact">
            <v-list-item to="/cards/rukovodstvo.html" title="Руководство" />
            <v-list-item title="История" />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-list>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>
