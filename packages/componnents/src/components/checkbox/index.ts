import type { App } from "vue";
import Checkbox from "./src/index";
import CheckboxGroup from "./src/group";

Checkbox.install = (app: App) => {
  app.component(Checkbox.name, Checkbox);
};

export { Checkbox, CheckboxGroup };

export default Checkbox;
