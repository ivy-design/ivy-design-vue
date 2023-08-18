import type { App } from "vue";
import CollapseItem from "./src/index";

CollapseItem.install = (app: App) => {
    app.component(CollapseItem.name, CollapseItem);
};

export default CollapseItem;
