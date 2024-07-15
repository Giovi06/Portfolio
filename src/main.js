import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "vue-router";

import p5vue from "p5vue";

const app = createApp(App);
app.use(p5vue);

app.use(router);

app.mount("#app");
