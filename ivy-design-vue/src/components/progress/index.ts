import type { App } from "vue";
import Progress from "./src/index";

Progress.install = (app: App) => {
  app.component(Progress.name, Progress);
};

export default Progress;
