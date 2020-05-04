<template>
    <v-content  class="text-center">
        <h2>{{title}}</h2>
        <v-card width="400px" flat  class="mx-auto">
        <v-list>
            <v-list-item class="mb-2 mt-2" :class="`${index%2===0 ?'grey lighten-3':'grey lighten-2'}`" v-for="(rule,index) in rules" :key="rule.title">
                <v-list-item-content class="text-center" v-if="rule.type==='video'">
                    <video class="v-content" controls :src="rule.link"></video>
                    <span> {{rule.title}} </span>
                </v-list-item-content>
                <v-list-item-content class="text-center" v-if="rule.type==='pdf'">
                    <v-btn outlined :href="rule.link" target="_blank">{{rule.title}} <v-icon right>mdi-download</v-icon></v-btn>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-card>
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
            rules: [],
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
            console.log(this.category);
            this.load(this.category);
        },
        methods: {
            load(category) {
                axios.get(`data/${category}.json`)
                    .then(response => {
                        console.log(response.data)
                        this.title = response.data.title;
                        this.rules = response.data.data;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
