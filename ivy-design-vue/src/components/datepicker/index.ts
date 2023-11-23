import type { App } from "vue";
import DatePicker from "./src/datepicker.vue";

DatePicker.install = (app: App) => {
  app.component(DatePicker.name, DatePicker);
};

export default DatePicker;
