import type { App } from "vue";
import Switch from "./src/index";

Switch.install = (app: App) => {
  app.component(Switch.name, Switch);
};

export default Switch;
