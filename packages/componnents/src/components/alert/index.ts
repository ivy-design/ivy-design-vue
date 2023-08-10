import alert from "./src/index";
import type { App } from "vue";

alert.install = (app: App) => {
  app.component(alert.name, alert);
};
export default alert;
