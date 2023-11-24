import type { App } from "vue";
import Drawer from "./src/index";

Drawer.install = (app: App) => {
  app.component(Drawer.name, Drawer);
};

export default Drawer;
