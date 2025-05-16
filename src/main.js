import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();

loadFonts();

const app = createApp(App);

app.config.warnHandler = (msg, vm, trace) => {}

app.use(vuetify);
app.use(router);
app.use(pinia);

app.mount("#app");
