<template>
    <v-content  class="text-center">
        <h2>{{title}}</h2>
        <template v-for="(item,index) in calendar">
            <div :key="item.month">
            <v-row class="ma-0 mb-2" align="center" :class="`${index%2===0 ?'primary darken-1':'primary lighten-1'}`"  justify="center"  >
                <v-col cols="9"  md="3" >{{item.month}}</v-col>
                <v-col cols="12"  md="6" class="pb-0 pt-0">

                        <v-row align="center" :class="`${index%2===0 ?'grey lighten-3':'grey lighten-2'}`"  justify="center" :key="event.name" v-for="(event,index) in item.events">
                            <v-col>{{event.time}} </v-col> <v-col >{{event.name}}</v-col>
                        </v-row>
                </v-col>
            </v-row>
            </div>
        </template>

    </v-content>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Raspisanie",
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data: () => ({
            dialog: false,
            title: '',
            address: '',
            calendar: [],
            //currentMonth: new Date().toLocaleString('ru', { month: 'long' })
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
                       // console.log(response.data);
                        this.title = response.data.title;
                        this.calendar = response.data.data;
                       // let finded =this.calendar.findIndex((item) => item.month.toLowerCase() === this.currentMonth);
                       // console.log(this.currentMonth);
                       // this.calendar=this.calendar.slice(finded);
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
