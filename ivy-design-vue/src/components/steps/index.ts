import type { App } from "vue";
import Steps from "./src/index";

Steps.install = (app: App) => {
  app.component(Steps.name, Steps);
};

export default Steps;
