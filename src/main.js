import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
createApp(App).use(store).use(router).use(Bootstrap).mount("#app");
