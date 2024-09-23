import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import { createPinia } from 'pinia'

app.use(createPinia())

createApp(App).use(store).mount('#app')
