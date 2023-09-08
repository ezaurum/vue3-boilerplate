import { createApp } from "vue";
import "@/assets/styles/tailwind.css";
import App from "./App.vue";
import { setPlugins } from "@/plugins";

const app = createApp(App);
setPlugins(app);

app.mount("body");
