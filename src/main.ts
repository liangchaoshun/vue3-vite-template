import { createApp } from 'vue'
import router from '@/router'
import App from './app.vue'
import 'reset-css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
