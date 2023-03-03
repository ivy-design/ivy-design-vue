import type { App } from "vue";
import Select from "./src/select.vue";

import Option from "./src/option.vue";

Select.install = (app: App) => {
  app.component(Select.name, Select);
};

export { Select, Option };

export default Select;
