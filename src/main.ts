import {createApp} from 'vue'
import {key, store} from './store'
import router from "./router"
import './assets/tailwind.css'

import App from './App.vue'

const app = createApp(App)

// pass the injection key
app.use(store, key)
app.use(router)

app.mount('#app');
