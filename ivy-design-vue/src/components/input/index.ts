import type { App } from "vue";
import Input from "./src/index";

Input.install = (app: App) => {
  app.component(Input.name, Input);
};

export default Input;
