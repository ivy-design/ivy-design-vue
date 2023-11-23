import footer from "./src/index";
import type { App } from "vue";

footer.install = (app: App) => {
    app.component(footer.name, footer);
};
export default footer;
