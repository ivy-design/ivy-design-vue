import type { App } from "vue";
import Select from "./src/select";

import Option from "./src/option";

Select.install = (app: App) => {
  app.component(Select.name, Select);
};

export { Select, Option };

export default Select;
