<template>
    <v-main class="text-center">
        <h2>{{title}}</h2>
        <v-card flat max-width="600px"  class="mx-auto">
        <v-list>
            <v-list-item class="mb-2 mt-2 text-left" v-for="(pdf) in items" :key="pdf.title"  :to="pdf.link" target="_blank">
               <v-icon left>mdi-file</v-icon><v-list-item-title>{{pdf.title}}.pdf</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-card>
    </v-main>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Andidoping",
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data: () => ({
           title: '',
            items: [],
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
                axios.get(`/data/${category.replace('.html','')}.json?timestamp=${Date.now()}`)
                    .then(response => {
                        // console.log(response.data)
                        this.title = response.data.title;
                        this.items = response.data.data;
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
