import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { setupCalendar } from 'v-calendar';


const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
app.use(setupCalendar, {})
