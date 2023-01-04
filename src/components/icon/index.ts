import icon from "./src/icon";
import type { App } from "vue";

icon.install = (app: App) => {
    app.component(icon.name, icon);
};
export default icon;
