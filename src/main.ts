import { createApp, defineComponent, h } from "vue";
import App from "./App.vue";
import install from "./components/index";
import dInstall from "./directives/index";
import "./styles/index.scss";

import "./assets/main.css";
const Home = defineComponent({
    name: "MxHome",
    setup() {
        return () => h("span", "home");
    },
});

const Layout = defineComponent({
    name: "MxLayout",
    setup() {
        return () => h("span", "layout");
    },
});

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/layout",
            component: Layout,
        },
    ],
});

createApp(App).use(router).use(install).use(dInstall).mount("#app");
