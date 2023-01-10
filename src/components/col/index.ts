import col from "./src/index";
import type { App } from "vue";

col.install = (app: App) => {
    app.component(col.name, col);
};
export default col;
