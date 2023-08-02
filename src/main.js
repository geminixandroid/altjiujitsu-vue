import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import VueMeta from 'vue-meta'
import vuetify from './plugins/vuetify'

createApp(App).use(router).use(vuetify).mount('#app')

//Vue.config.productionTip = false
//Vue.use(VueMeta)
