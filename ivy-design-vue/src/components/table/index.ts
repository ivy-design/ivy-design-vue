import table from "./src/index";
import type { App } from "vue";
table.install = (app: App) => {
    app.component(table.name, table);
};
export default table;
