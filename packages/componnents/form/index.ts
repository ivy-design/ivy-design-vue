import Form from "./src/index";
import FormItem from "./src/item";
import type { App } from "vue";

Form.install = (app: App) => {
  app.component(Form.name, Form);
};

export { Form, FormItem };
export default Form;
