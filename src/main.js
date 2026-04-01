import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const SITE_NAME = 'Алтайская Краевая Федерация Джиу-Джитсу'

const app = createApp(App)

app.config.globalProperties.$setTitle = (title) => {
  document.title = title ? `${title} | ${SITE_NAME}` : `АКФД | ${SITE_NAME}`
}

app.use(router)
app.use(vuetify)
app.mount('#app')
