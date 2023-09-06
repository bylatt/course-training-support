import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./pages/Course.vue"
const app = createApp(App);
app.use(router);
app.mount("#app");
