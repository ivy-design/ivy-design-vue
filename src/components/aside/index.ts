import aside from "./src/index";
import type { App } from "vue";

aside.install = (app: App) => {
    app.component(aside.name, aside);
};
export default aside;
