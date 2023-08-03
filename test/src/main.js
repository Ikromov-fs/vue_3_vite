import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Toast from "vue-toastification";
import router from "./router";

import "./plugins/axios";
import "vue-toastification/dist/index.css";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount("#app");
