import header from "./src/index";
import type { App } from "vue";

header.install = (app: App) => {
    app.component(header.name, header);
};
export default header;
