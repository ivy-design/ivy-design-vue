import divider from "./src/index";
import type { App } from "vue";

divider.install = (app: App) => {
    app.component(divider.name, divider);
};
export default divider;
