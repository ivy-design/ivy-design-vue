import row from "./src/index";
import type { App } from "vue";

row.install = (app: App) => {
    app.component(row.name, row);
};
export default row;
