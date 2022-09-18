import Vue, { createApp } from "vue";
import VueX from "vuex";
import { VueQueryPlugin } from "vue-query";
import root from "@/index.vue";
import routers from "@/routers";
import store, { key } from "@/stores";

const app = createApp(root);
app.use(store, key);
app.use(VueQueryPlugin);
app.use(routers);
app.mount("#app");
