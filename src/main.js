import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import modalPlugin from './core/plugins/modal.plugin.js'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(modalPlugin)

app.mount('#app')
