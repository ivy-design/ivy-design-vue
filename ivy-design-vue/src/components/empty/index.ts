import type { App } from "vue";
import Empty from "./src/index";

Empty.install = (app: App) => {
  app.component(Empty.name, Empty);
};

export default Empty;
