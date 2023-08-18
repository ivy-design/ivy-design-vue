import type { App } from "vue";
import dialog from "./src/index";

dialog.install = (app: App) => {
    app.component(dialog.name, dialog);
};

export default dialog;
