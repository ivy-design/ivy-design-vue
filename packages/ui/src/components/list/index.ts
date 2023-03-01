import List from "./src/index";
import ListItem from "./src/item";
import type { App } from "vue";

List.install = (app: App) => {
  app.component(List.name, List);
};

export { List, ListItem };
export default List;
