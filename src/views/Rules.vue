<template>
    <v-content  class="text-center">
        <h2>{{title}}</h2>

            <v-list max-width="400px" class="mx-auto" color="transparent">
                <v-list-item  class="mb-2 mt-2"   v-for="(pdf) in pdfs" :key="pdf.title">
                    <v-list-item-content class="text-center" >
                        <v-btn width="400px" outlined :href="pdf.link" target="_blank">{{pdf.title}} <v-icon right>mdi-download</v-icon></v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>


        <v-tabs
                v-model="tabSwitcher"
                background-color="primary"

        >
            <v-tab
                    v-for="tab in tabs"
                    :key="tab.tabname"

            >

                {{ tab.tabname }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabSwitcher">
            <v-tab-item
                    v-for="tab in tabs"
                    :key="tab.tabname"
            >
                <v-row align="center" justify="center">
                    <v-col cols="12" md="3"  sm="6" v-for="(rule) in tab.tabcontent" :key="rule.title">
                        <v-card elevation="2" width="400px"  class="ma-auto" >
                            <v-card-title>{{rule.title}}</v-card-title>
                            <v-card-subtitle align="left">{{rule.subtitle}}</v-card-subtitle>
                            <v-card-text>
                                <video class="v-content" controls :src="rule.link"></video>
                            </v-card-text>

                        </v-card>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs-items>
    </v-content>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Rules",
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data: () => ({
           title: '',
            pdfs: [],
            tabSwitcher: null,
            tabs:[]
        }),
        metaInfo () {
            return {
                title: this.title
            }
        },
        watch: {
            category: function (newVal) { // watch it
                this.load(newVal)
            }
        },
        created() {
            // console.log(this.category);
            this.load(this.category);
        },
        methods: {
            load(category) {
                axios.get(`/data/${category.replace('.html','')}.json`)
                    .then(response => {
                        // console.log(response.data)
                        this.title = response.data.title;
                        this.pdfs = response.data.pdfs;
                        this.tabs=response.data.tabs;
                    }).finally(
                    ()=>{
                        this.$nextTick(()=>{
                            document.dispatchEvent(new Event("x-app-rendered"))
                        })

                    })
            }
        }
    }
</script>

<style scoped>

</style>
