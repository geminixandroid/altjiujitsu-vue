<template>
    <v-content  class="text-center">
        <h2>{{title}}</h2>
        <v-card width="400px" flat  class="mx-auto">
        <v-list>
            <v-list-item class="mb-2 mt-2" :class="`${index%2===0 ?'grey lighten-3':'grey lighten-2'}`" v-for="(partner,index) in partners" :key="partner.title">
                <v-list-item-avatar color="primary">
                    <v-img :src="partner.src" contain></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="text-center">
                    <div>{{partner.title}}</div>
                    <div><a target="_blank" :href="partner.link">{{partner.link}}</a>
                    </div>
                    <v-divider class="mt-2"></v-divider>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-card>
    </v-content>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Partners",
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data: () => ({
           title: '',
            partners: [],
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
                        this.partners = response.data.data;
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
