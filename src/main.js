import { createApp } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router";
import "./style.css";
import App from "./App.vue";
library.add(faSpinner, faClock, faChevronRight)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount("#app");
