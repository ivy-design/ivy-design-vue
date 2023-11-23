import type { App } from "vue";
import Cell from "./src/index";

Cell.install = (app: App) => {
    app.component(Cell.name, Cell);
};

export default Cell;
