import link from "./src/index";
import type { App } from "vue";

link.install = (app: App) => {
  app.component(link.name, link);
};
export default link;
