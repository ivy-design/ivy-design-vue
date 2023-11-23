import type { App } from "vue";
import InputNumber from "./src/input-number.vue";

InputNumber.install = (app: App) => {
  app.component(InputNumber.name, InputNumber);
};

export default InputNumber;
