import main from "./src/index";
import type { App } from "vue";

main.install = (app: App) => {
    app.component(main.name, main);
};
export default main;
