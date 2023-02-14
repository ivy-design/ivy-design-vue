import tableColumn from "./src/index";
import type { App } from "vue";
tableColumn.install = (app: App) => {
    app.component(tableColumn.name, tableColumn);
};
export default tableColumn;
