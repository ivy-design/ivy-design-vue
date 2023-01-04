import { createApp } from "vue";
import App from "./App.vue";
import install from './components/index'
import './styles/index.scss'

import "./assets/main.css";

createApp(App).use(install).mount("#app");
