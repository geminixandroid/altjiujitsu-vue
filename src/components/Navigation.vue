<template>
    <v-list nav dense>
        <v-list-item  to="/" ><v-icon left>mdi-home</v-icon>Главная</v-list-item>
        <!--<v-list-item><v-icon left>mdi-newspaper</v-icon>Новости</v-list-item>-->
        <v-list-item><v-icon left>mdi-calendar-check</v-icon>Мероприятия</v-list-item>
        <v-list-item to="/cards/treners"><v-icon left>mdi-human-greeting</v-icon>Наши тренеры</v-list-item>
        <v-list-item to="/cards/gordost"><v-icon left>mdi-human-handsup</v-icon>Гордость федерации</v-list-item>
        <v-list-item to="/partners/partners"><v-icon left>{{handshake}}</v-icon>Партнеры федерации</v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-expansion-panels  flat accordion>
                <v-expansion-panel>
                    <v-expansion-panel-header >Расписание</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item to="/raspisanie/raspisanieSHOR">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СШОР-3
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisaniePOSP">
                            <v-list-item-content>
                                <v-list-item-title>
                                    ПОСПЕЛИХИНСКАЯ ДЮСШ
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    с.Поспелиха
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieTEMP">
                            <v-list-item-content>
                                <v-list-item-title>
                                    ТЕМП
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieVEGA">
                            <v-list-item-content>
                                <v-list-item-title>
                                    ВСК ВЕГА-КРИСТАЛЛ
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisaniePARTIZAN">
                            <v-list-item-content>
                                <v-list-item-title>
                                    СПК ПАРТИЗАН
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    г.Барнаул
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieBER">
                            <v-list-item-content>
                                <v-list-item-title>
                                    КДЦ БЕРЕЗОВСКИЙ
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    с.Березовка
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieCHER">
                            <v-list-item-content>
                                <v-list-item-title>
                                    ДК ЧЕРЕМНИНСКИЙ
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    с.Черемное
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item to="/raspisanie/raspisanieFERR">
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
                        <v-list-item to="/cards/vedushie21">до 21 года</v-list-item>
                        <v-list-item to="/cards/vedushie18">до 18 лет</v-list-item>
                        <v-list-item to="/cards/vedushie16">до 16 лет</v-list-item>
                        <v-list-item to="/cards/vedushie14">до 14 лет</v-list-item>
                        <v-list-item to="/cards/vedushie12">до 12 лет</v-list-item>
                        <v-divider></v-divider>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                    <v-expansion-panel-header>Судейство</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item to="/cards/kollegia">Коллегия судей</v-list-item>
                        <v-list-item >Правила соревнований</v-list-item>
                        <v-list-item >ЕВСК</v-list-item>
                        <v-list-item >Новости</v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                    <v-expansion-panel-header>Федерация</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item to="/cards/rukovodstvo">Руководство</v-list-item>
                        <v-list-item >История</v-list-item>
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
