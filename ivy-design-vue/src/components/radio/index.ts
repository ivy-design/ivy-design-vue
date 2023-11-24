import type { App } from "vue";
import Radio from "./src/index";
import RadioGroup from "./src/group";

Radio.install = (app: App) => {
  app.component(Radio.name, Radio);
};

export { Radio, RadioGroup };

export default Radio;
