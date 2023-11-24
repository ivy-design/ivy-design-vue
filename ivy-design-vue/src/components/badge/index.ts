import Badge from "./src/index";
import type { App } from "vue";
Badge.install = (app: App) => {
    app.component(Badge.name, Badge);
};
export default Badge;
