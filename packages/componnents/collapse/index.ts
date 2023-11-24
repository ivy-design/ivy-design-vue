import type { App } from "vue";
import Collapse from "./src/index";

Collapse.install = (app: App) => {
    app.component(Collapse.name, Collapse);
};

export default Collapse;
