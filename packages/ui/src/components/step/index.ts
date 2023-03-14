import type { App } from "vue";
import Step from "./src/index";

Step.install = (app: App) => {
  app.component(Step.name, Step);
};

export default Step;
