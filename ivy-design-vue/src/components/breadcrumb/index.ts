import type { App } from "vue";
import Breadcrumb from "./src/index";

Breadcrumb.install = (app: App) => {
    app.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;
