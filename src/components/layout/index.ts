import layout from "./src/index";
import type { App } from "vue";

layout.install = (app: App) => {
    app.component(layout.name, layout);
};
export default layout;
