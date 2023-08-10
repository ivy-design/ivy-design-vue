import space from "./src/index";
import type { App } from "vue";

space.install = (app: App) => {
  app.component(space.name, space);
};
export default space;
