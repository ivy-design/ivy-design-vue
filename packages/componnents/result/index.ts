import Result from "./src/index";
import type { App } from "vue";

Result.install = (app: App) => {
  app.component(Result.name, Result);
};
export default Result;
