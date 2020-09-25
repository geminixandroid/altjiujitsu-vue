<template>
    <v-list nav dense>
        <v-list-item  to="/" ><v-icon left>mdi-home</v-icon>Главная</v-list-item>
        <!--<v-list-item><v-icon left>mdi-newspaper</v-icon>Новости</v-list-item>-->
        <v-list-item to="/calendar/calendar.html"><v-icon left>mdi-calendar-check</v-icon>Мероприятия</v-list-item>
        <v-list-item to="/cards/treners.html"><v-icon left>mdi-human-greeting</v-icon>Наши тренеры</v-list-item>
        <v-list-item to="/cards/gordost.html"><v-icon left>mdi-human-handsup</v-icon>Гордость федерации</v-list-item>
        <v-list-item to="/partners/partners.html"><v-icon left>{{handshake}}</v-icon>Партнеры федерации</v-list-item>
        <v-list-item  to="/antidoping/antidoping.html"><v-icon left>mdi-pill</v-icon>Антидопинг</v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-expansion-panels  flat accordion>
                <v-expansion-panel>
                    <v-expansion-panel-header >Расписание</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item to="/raspisanie/raspisanieSHOR.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СШОР-3
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisaniePOSP.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    ПОСПЕЛИХИНСКАЯ ДЮСШ
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    с.Поспелиха
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisaniePITON.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СК Питон
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieSINGITAY.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    Сингитай
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisaniePARTIZAN.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СПК ПАРТИЗАН
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieBER.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СК Пересвет
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    с.Березовка
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieCHER.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СК Алан
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    с.Черемное
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieFERR.html">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СК FERRUM
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    с.Бобровка
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>Ведущие спортсмены</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item to="/cards/vedushie21.html">до 21 года</v-list-item>
                        <v-list-item to="/cards/vedushie18.html">до 18 лет</v-list-item>
                        <v-list-item to="/cards/vedushie16.html">до 16 лет</v-list-item>
                        <v-list-item to="/cards/vedushie14.html">до 14 лет</v-list-item>
                        <v-list-item to="/cards/vedushie12.html">до 12 лет</v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                    <v-expansion-panel-header>Судейство</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item to="/cards/kollegia.html">Коллегия судей</v-list-item>
                        <v-list-item  to="/rules/rules.html">Правила соревнований</v-list-item>
                        <v-list-item >ЕВСК</v-list-item>
                        <v-list-item >Новости</v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                    <v-expansion-panel-header>Федерация</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item  to="/cards/rukovodstvo.html">Руководство</v-list-item>
                        <v-list-item >История</v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-list-item>
        </v-list>
</template>

<script>
    import { mdiHandshake,mdiPodium } from '@mdi/js'
    export default {
        name: "Navigation",
        data:() => {
            return {
                items:[],
                podium:mdiPodium,
                handshake: mdiHandshake
            }
        },
        created() {

        }
    }
</script>

<style scoped>
</style>
