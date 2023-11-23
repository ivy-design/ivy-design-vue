import type { App } from "vue";
import CellGroup from "./src/index";

CellGroup.install = (app: App) => {
    app.component(`fox${CellGroup.name}`, CellGroup);
};
export default CellGroup;
