import { createApp } from "vue"
import App from "./App.vue"
import "./global.css"
import { createPinia } from "pinia"
import router from "./router"

console.log(import.meta.env)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount("#app")
