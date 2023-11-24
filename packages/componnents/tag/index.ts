import tag from "./src/index";
import type { App } from "vue";

tag.install = (app: App) => {
    app.component(tag.name, tag);
};
export default tag;
