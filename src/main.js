import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import p5vue from "p5vue";
import "primeflex/primeflex.css";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";

const app = createApp(App);
app.use(p5vue);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
});
app.use(router);

app.mount("#app");
