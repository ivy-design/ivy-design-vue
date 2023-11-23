import CollapseTransition from "./src/index";
import type { App } from "vue";

CollapseTransition.install = (app: App) => {
    app.component(CollapseTransition.name, CollapseTransition);
};
export default CollapseTransition;
