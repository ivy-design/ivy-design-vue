import type { App } from "vue";
import comp from "./src/index.vue";

comp.install = (app: App) => {
  app.component(comp.name, comp);
};
export default comp;
