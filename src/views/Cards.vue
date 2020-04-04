<template>
    <v-content >
        <h2 class="text-center">{{title}}</h2>
        <v-dialog v-model="isMenuShow" max-width="800px" >
            <v-card class="mx-auto">
                <v-card-title class=" primary mb-2">{{menuTitle}}<v-spacer></v-spacer><v-btn icon @click="isMenuShow=false"><v-icon >mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <div v-for="(regal,index) in menuRegals" :key="index">
                        &#8226; {{regal}}
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text @click="isMenuShow=false"><v-icon left >mdi-close</v-icon>закрыть</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-row align="center" justify="center">
            <v-col cols="12" md="3"  sm="6" v-for="(card) in cards" :key="card.title">
                <v-card width="300px" class="ma-auto" >
                    <v-list-item three-line>
                        <v-list-item-content  class="text-center ">
                            <v-list-item-title class="mb-1 ">{{card.title}}</v-list-item-title>
                            <v-img

                                    :src="card.src"
                                    height="200"
                                    width="200"
                                    contain
                                    @click="showMenu(card.title,card.regals)"
                            >

                            </v-img>
                            <v-list-item v-if="card.subtitle">
                                <v-list-item-subtitle>
                                    {{card.subtitle}}
                                </v-list-item-subtitle>

                            </v-list-item>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions v-if="card.phone">
                        <v-btn :href="`tel:${card.phone}`" color="primary" class="black--text">
                            <v-icon left>mdi-phone</v-icon>
                            {{card.phone}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Cards",
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data: () => ({
            dialog: false,
            title: '',
            cards: [],
            isMenuShow: false,
            menuTitle: '',
            menuRegals: [],
        }),
        metaInfo () {
            return {
                title: this.title
            }
        },
        watch: {
            category: function(newVal)  { // watch it
               this.load(newVal)
            }
        },
        created() {
            console.log(this.category);
            this.load(this.category);
        },
        methods: {
            load(category) {
                axios.get(`data/${category}.json`)
                    .then(response => {
                            this.title = response.data.title;
                            this.cards = response.data.data;
                    });
            },
            showMenu(title, regals) {
                if (regals) {
                    this.isMenuShow = true;
                    this.menuTitle = title;
                    this.menuRegals = regals;
                }
            }
        }
    }
</script>

<style scoped>

</style>
